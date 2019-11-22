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
                <UserField />
                <OpponentField pokemon={this.state.opponent_pokemon} />
            </Box>
        )
    }
}