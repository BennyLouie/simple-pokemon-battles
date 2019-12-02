import React from 'react'

export default class StatsContainer extends React.Component {

    render() {
        console.log(this.props.pokemon)
        return (
            <div className='stats-container'>
                <p>HP: {this.props.pokemon.hp} <button>+</button></p>
                <p>ATK: {this.props.pokemon.atk} <button>+</button></p>
                <p>DEF: {this.props.pokemon.def} <button>+</button></p>
                <p>SPD: {this.props.pokemon.spd} <button>+</button></p>
                <p>EXP: {this.props.pokemon.exp} / {this.props.pokemon.exp_max}</p>
                <p>Available Stat Points: {this.props.pokemon.stat_pts}</p>
            </div>
        )
    }
}