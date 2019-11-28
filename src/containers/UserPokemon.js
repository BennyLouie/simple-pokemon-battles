import React from 'react'
import Pokemon from '../components/Pokemon'
import { NavLink } from 'react-router-dom'

export default class UserPokemon extends React.Component {

    render() {
        return (
            <div>
                <Pokemon pokemon={this.props.pokemon} />
                <div>
                    <button>Status Update</button>
                    <button>Release Pokemon</button>
                    <NavLink to='/battle' onClick={() => this.props.selectPokemon(this.props.pokemon)}>Battle</NavLink>
                </div>
            </div>
        )
    }
}