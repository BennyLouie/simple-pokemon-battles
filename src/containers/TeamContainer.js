import React from 'react'
import UserPokemon from './UserPokemon'

export default class TeamContainer extends React.Component {

    render() {
        return (
            <div className='pokemon-team'>
                {this.props.pokemons.map((pokemon, idx) => <UserPokemon key={idx} user={this.props.user} pokemon={pokemon} selectPokemon={this.props.selectPokemon} releasePokemon={this.props.releasePokemon} />)}
            </div>
        )
    }
}