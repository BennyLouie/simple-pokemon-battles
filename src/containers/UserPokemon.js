import React from 'react'
import Pokemon from '../components/Pokemon'
import { NavLink } from 'react-router-dom'

export default class UserPokemon extends React.Component {

    render() {
        return (
            <div id={`${this.props.pokemon.name}-card`} className='pc-pokemon'>
                <Pokemon pokemon={this.props.pokemon} />
                <div className='team links'>
                    <NavLink to='/update-pokemon' className='team status btn' onClick={() => this.props.selectPokemon(this.props.pokemon)}><strong>Status</strong></NavLink>
                    <button className='release team btn' onClick={() => this.props.releasePokemon(this.props.user, this.props.pokemon)} ><strong>Release</strong></button>
                    <NavLink to='/battle' className='battle team btn' onClick={() => this.props.selectPokemon(this.props.pokemon)}><strong>Battle</strong></NavLink>
                </div>
            </div>
        )
    }
}