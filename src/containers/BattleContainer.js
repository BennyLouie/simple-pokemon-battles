import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
// import Box from "@material-ui/core/Box"
import battleLogic from '../BattleLogic'
import MessagesContainer from "./MessagesContainer"


const opponent_decision = Math.floor(Math.random() * 2) + 1

export default class BattleContainer extends React.Component {
    state = {
        opponent_pokemon: null,
        opponent_action: opponent_decision,
        messages: []
    }

    decideFirst = (data) => {
        let userPokemon = this.props.user_pokemon
        if (userPokemon.spd > data.spd) {
          return userPokemon
        }
        else if (userPokemon.spd < data.spd) {
          return data
        }
        else {
            const roll = Math.floor(Math.random() * 2) + 1
          return roll === 1 ? userPokemon : data
        }
    }

    componentDidMount() {
        const opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
        fetch(`http://localhost:3000/pokemons/${opponent_pokemon_roll}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    opponent_pokemon: data
                })
        })
    }
  
    battleAction = (user_action) => {
      let opponent_action = Math.floor(Math.random() * 2) + 1
      let userPokemon = this.props.user_pokemon
      const first = this.decideFirst(this.state.opponent_pokemon)
      const second = first === userPokemon ? this.state.opponent_pokemon : userPokemon
      console.log('Battle Round!')
      this.setState({
        opponent_action,
        messages: [...battleLogic(user_action, opponent_action, userPokemon, first, second)]
      })
    }

  render() {
      // debugger
      console.log(this.props)
        return (
          <div className='battle-display'>
            <UserField battleAction={this.battleAction} user={true} pokemon={this.props.user_pokemon} />
            <div className='simple-ai-rendering'>
              <OpponentField pokemon={this.state.opponent_pokemon ? this.state.opponent_pokemon : { atk: 4, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png", def: 5, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", hp: 2, id: 76, lv: 1, name: "Golem", spd: 5, stat_pts: 0 }} />
              <MessagesContainer messages={this.state.messages} />
            </div>
          </div>
        )
    }
}