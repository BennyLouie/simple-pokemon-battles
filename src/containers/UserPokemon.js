import React from 'react'
import Pokemon from '../components/Pokemon'
import { NavLink } from 'react-router-dom'

export default class UserPokemon extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div id={`${this.props.pokemon.name}-card`} className='pc-pokemon'>
                <Pokemon pokemon={this.props.pokemon} />
                <div className='links'>
                    <NavLink to='/update-pokemon' onClick={() => this.props.selectPokemon(this.props.pokemon)}>Status Update</NavLink>
                    <button onClick={() => this.props.releasePokemon(this.props.user, this.props.pokemon)} >Release Pokemon</button>
                    <NavLink to='/battle' onClick={() => this.props.selectPokemon(this.props.pokemon)}>Battle</NavLink>
                </div>
            </div>
        )
    }
}