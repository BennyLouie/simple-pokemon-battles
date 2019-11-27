import React from 'react'
import TeamContainer from './TeamContainer'

export default class HomePage extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <TeamContainer pokemons={this.props.pokemons} selectPokemon={this.props.selectPokemon} />
        )
    }
}