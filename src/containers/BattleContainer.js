import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
import Box from "@material-ui/core/Box"


const opponent_decision = Math.floor(Math.random() * 2) + 1

export default class BattleContainer extends React.Component {


    state = {
        opponent_pokemon: null,
        opponent_action: opponent_decision,
        opponent_hp: null,
        user_hp: null
    }

    decideFirst = (data) => {
        let userPokemon = this.props.user_pokemon
        if (userPokemon.spd > data.spd) {
            // console.log(userPokemon.spd, "user")
          return userPokemon
        } else if (userPokemon.spd < data.spd) {
            // console.log(data.spd, "opponent")
          return data
        } else {
            const roll = Math.floor(Math.random() * 2) + 1
            // console.log(roll, "roll")
          return roll === 1 ? userPokemon : data
        }
    }

    componentDidMount() {
        const opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
        fetch(`http://localhost:3000/pokemons/${opponent_pokemon_roll}`)
            .then(res => res.json())
            .then(data => {
                // console.log(this.props.user_pokemon.spd)
                // console.log(data.spd)
                let userPokemon = this.props.user_pokemon
                // console.log(this.decideFirst(data))
                this.setState({
                    opponent_pokemon: data,
                    opponent_hp: data.hp,
                    user_hp: userPokemon.hp
                })
        })
    }
  
  battleAction = (user_action) => {
    let opponent_action = Math.floor(Math.random() * 2) + 1
    let userPokemon = this.props.user_pokemon
    let first = this.decideFirst(this.state.opponent_pokemon)
    let second = first === userPokemon ? this.state.opponent_pokemon : userPokemon
    this.setState({
      opponent_action
    })
    console.log(this.state.opponent_action, "opponent action")
    // console.log(user_action, "user")
    console.log(first)
    console.log(second)
    let firstHealth = document.getElementById(`${first.name}-health`) ? document.getElementById(`${first.name}-health`).value : 1
    let secondHealth = document.getElementById(`${second.name}-health`) ? document.getElementById(`${second.name}-health`).value : 1
    console.log(document.getElementById(`${second.name}-health`))
    if (user_action === 1 && opponent_action === 1) {
      console.log('Yup')
      const first_roll = Math.floor(Math.random() * 3) + 1
      const second_roll = Math.floor(Math.random() * 3) + 1
      if (first_roll > second_roll) {
        if (first.atk > second.def) {
          secondHealth -= 2
          console.log(`${second.name} has ${secondHealth} health left`)
          if (secondHealth > 0) {
            console.log('Attack Misses! Turn Ends!')
          } else {
            console.log(`${first.name} wins!`)
          }
        }
        else if (first.atk <= second.def) {
          secondHealth -= 1
          console.log(`${second.name} has ${secondHealth} health left`)
          if (secondHealth > 0) {
            console.log('Attack Misses! Turn Ends!')
          } else {
            console.log(`${first.name} wins!`)
          }
        }
      }
      else if (first_roll < second_roll) {
        console.log(`${first.name} attack misses!`)
        if (second.atk > first.def) {
          firstHealth -= 2
          console.log(`${first.name} has ${firstHealth} health left`)
          if (firstHealth > 0) {
            console.log('Turn Ends!')
          } else {
            console.log(`${first.name} loses!`)
          }
        }
        else if (second.atk <= first.def) {
          firstHealth -= 1
          console.log(`${first.name} has ${firstHealth} health left`)
          if (firstHealth > 0) {
            console.log('Turn ends!')
          } else {
            console.log(`${first.name} loses!`)
          }
        }
      }
      else {
        if (first.atk > second.def) {
          secondHealth -= 2
          console.log(`${second.name} has ${secondHealth} health left`)
          if (secondHealth > 0) {
            if (second.atk > first.def) {
              firstHealth -= 2
              console.log(`${first.name} has ${firstHealth} health left`)
              if (firstHealth > 0) {
                console.log('Turn ends!')
              } else {
                console.log(`${first.name} loses!`)
              }
            }
            else if (second.atk <= first.def) {
              firstHealth -= 1
              console.log(`${first.name} has ${firstHealth} health left`)
              if (firstHealth > 0) {
                console.log('Turn Ends!')
              } else {
                console.log(`${first.name} loses!`)
              }
            }
          } else {
            console.log(`${second.name} has ${secondHealth} health left`)
            console.log(`${first.name} wins!`)
          }
        }
      }
    }
    }

    render() {
        // console.log(this.props)
      // console.log(document.getElementById("Golem-health") ? document.getElementById("Golem-health").value : 'no value')
      // console.log(
      //   document.getElementById("Golem-health")
      //     ? document.getElementById("Golem-health").max
      //     : "no max"
      // )
        // debugger
        return (
          <Box>
            <UserField battleAction={this.battleAction} user={true} hp={this.state.user_hp} pokemon={this.props.selected_pokemon ? this.props.selected_pokemon : { atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0 }}/>
            <OpponentField hp={this.state.opponent_hp} pokemon={this.state.opponent_pokemon ? this.state.opponent_pokemon : {atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0}}/>
          </Box>
        )
    }
}