import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
import Box from "@material-ui/core/Box"
import battleLogic from '../BattleLogic'


const opponent_decision = Math.floor(Math.random() * 2) + 1

export default class BattleContainer extends React.Component {


    state = {
        opponent_pokemon: null,
        opponent_action: opponent_decision
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
                // let userPokemon = this.props.user_pokemon
                // console.log(this.decideFirst(data))
                this.setState({
                    opponent_pokemon: data
                })
              console.log(this.props.user_pokemon)
        })
    }
  
  battleAction = (user_action) => {
    let opponent_action = Math.floor(Math.random() * 2) + 1
    let userPokemon = this.props.user_pokemon
    const first = this.decideFirst(this.state.opponent_pokemon)
    const second = first === userPokemon ? this.state.opponent_pokemon : userPokemon
    this.setState({
      opponent_action
    })
    
    battleLogic(user_action, opponent_action, userPokemon, first, second)
    }

    render() {
      // console.log(this.props.user_pokemon)
      console.log(this.state.opponent_pokemon)
      // console.log(document.getElementById("Golem-health") ? document.getElementById("Golem-health").value : 'no value')
      // console.log(
      //   document.getElementById("Golem-health")
      //     ? document.getElementById("Golem-health").max
      //     : "no max"
      // )
        // debugger
        return (
          <Box>
            <UserField battleAction={this.battleAction} user={true} pokemon={this.props.user_pokemon}/>
            <OpponentField pokemon={this.state.opponent_pokemon ? this.state.opponent_pokemon : {atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0}}/>
          </Box>
        )
    }
}