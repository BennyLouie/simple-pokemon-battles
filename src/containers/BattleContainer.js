import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
import Box from "@material-ui/core/Box"

export default class BattleContainer extends React.Component {

    state = {
        opponent_pokemon: null
    }

    componentDidMount() {
        const opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
        fetch(`http://localhost:3000/pokemons/${opponent_pokemon_roll}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                opponent_pokemon: data
            })
        })
    }

    render() {
        console.log(this.props)
        return (
          <Box>
            <UserField pokemon={this.props.selected_pokemon ? this.props.selected_pokemon : { atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0 }}/>
            <OpponentField pokemon={this.state.opponent_pokemon ? this.state.opponent_pokemon : {atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0}}/>
          </Box>
        )
    }
}