import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
import Box from "@material-ui/core/Box"

export default class BattleContainer extends React.Component {

    state = {
        opponent_pokemon: null,
        first: null,
        second: null,
        opponent_action: null,
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
                let first = this.decideFirst(data)
                let second = first === userPokemon ? data : userPokemon
                let opponent_action = Math.floor(Math.random() * 2) + 1
                // console.log(this.decideFirst(data))
                this.setState({
                    opponent_pokemon: data,
                    first,
                    second,
                    opponent_action,
                    opponent_hp: data.hp,
                    user_hp: userPokemon.hp
            })
        })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        // debugger
        return (
          <Box>
            <UserField hp={this.state.user_hp} pokemon={this.props.selected_pokemon ? this.props.selected_pokemon : { atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0 }}/>
            <OpponentField hp={this.state.opponent_hp} pokemon={this.state.opponent_pokemon ? this.state.opponent_pokemon : {atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0}}/>
          </Box>
        )
    }
}