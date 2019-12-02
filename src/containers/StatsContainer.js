import React from 'react'

export default class StatsContainer extends React.Component {

    state = {
        hp: this.props.pokemon.hp,
        atk: this.props.pokemon.atk,
        def: this.props.pokemon.def,
        spd: this.props.pokemon.spd,
        stat_pts: this.props.pokemon.stat_pts
    }

    addToStat = (stat) => {
        if (this.state.stat_pts > 0) {
            this.setState({
                [stat]: this.state[stat] + 1,
                stat_pts: this.state.stat_pts - 1
            })
        }
    }

    subtractFromStat = (stat) => {
        if (this.state[stat] > this.props.pokemon[stat]) {
            this.setState({
                [stat]: this.state[stat] - 1,
                stat_pts: this.state.stat_pts + 1
            })
        }
    }

    render() {
        // debugger
        // console.log(this.props.pokemon)
        console.log(this.state)
        return (
            <div className='stats-container'>
                <p>HP: {this.state.hp} <button onClick={() => this.addToStat('hp')}>+</button><button onClick={() => this.subtractFromStat('hp')}>-</button></p>
                <p>ATK: {this.state.atk} <button onClick={() => this.addToStat('atk')}>+</button><button onClick={() => this.subtractFromStat('atk')}>-</button></p>
                <p>DEF: {this.state.def} <button onClick={() => this.addToStat('def')}>+</button><button onClick={() => this.subtractFromStat('def')}>-</button></p>
                <p>SPD: {this.state.spd} <button onClick={() => this.addToStat('spd')}>+</button><button onClick={() => this.subtractFromStat('spd')}>-</button></p>
                <p>EXP: {this.props.pokemon.exp} / {this.props.pokemon.exp_max}</p>
                <p>Available Stat Points: {this.state.stat_pts}</p>
                <button onClick={() => this.props.updateStats(this.props.pokemon, this.state, this.props.user)}>Update Stats</button>
            </div>
        )
    }
}