import React from 'react'
import UserPokemon from './UserPokemon'

export default class TeamContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className='pokemon-team'>
                {this.props.pokemons.map((pokemon, idx) => <UserPokemon key={idx} pokemon={pokemon} />)}
            </div>
        )
    }
}