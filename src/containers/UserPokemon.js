import React from 'react'
import Pokemon from '../components/Pokemon'

export default class UserPokemon extends React.Component {

    render() {
        return (
            <div>
                <Pokemon pokemon={this.props.pokemon} />
                <div>
                    <button>Status Update</button>
                    <button>Battle</button>
                </div>
            </div>
        )
    }
}