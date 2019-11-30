import React from 'react'

export default class StatsContainer extends React.Component {

    render() {
        console.log(this.props.pokemon)
        return (
            <div className='stats-container'>
                <p>HP: {this.props.pokemon.hp}</p>
                <p>ATK: {this.props.pokemon.atk}</p>
                <p>DEF: {this.props.pokemon.def}</p>
                <p>SPD: {this.props.pokemon.spd}</p>
                <p>EXP: {this.props.pokemon.exp}</p>
            </div>
        )
    }
}