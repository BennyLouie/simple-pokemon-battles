import React from 'react'
import Pokemon from '../components/Pokemon'
import { NavLink } from 'react-router-dom'

export default class UserPokemon extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                <Pokemon pokemon={this.props.pokemon} />
                <div>
                    <button>Status Update</button>
                    <button onClick={() => this.props.releasePokemon(this.props.user, this.props.pokemon)} >Release Pokemon</button>
                    <NavLink to='/battle' onClick={() => this.props.selectPokemon(this.props.pokemon)}>Battle</NavLink>
                </div>
            </div>
        )
    }
}