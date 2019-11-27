import React from "react"
import UserField from "./UserField"
import OpponentField from "./OpponentField"
// import Box from "@material-ui/core/Box"
import battleLogic from "../BattleLogic"
import MessagesContainer from "./MessagesContainer"
import { NavLink } from 'react-router-dom'

const opponent_decision = Math.floor(Math.random() * 2) + 1

// const checkMessages = (array) => {
//   let splitWords = []
//   array.forEach(element => {
//     const newArr = element.split(" ")
//     // debugger
//     splitWords.push(...newArr)
//   })
//   // console.log(splitWords)
//   if (splitWords.includes("wins!") || splitWords.includes("lost!")) {
//     return true
//   }
//   return false
// }

export default class BattleContainer extends React.Component {
  state = {
    opponent_action: opponent_decision,
    messages: []
  }
  

  decideFirst = data => {
    let userPokemon = this.props.user_pokemon
    if (userPokemon.spd > data.spd) {
      return userPokemon
    } else if (userPokemon.spd < data.spd) {
      return data
    } else {
      const roll = Math.floor(Math.random() * 2) + 1
      return roll === 1 ? userPokemon : data
    }
  }
  
  battleAction = user_action => {
    let opponent_action = Math.floor(Math.random() * 2) + 1
    let userPokemon = this.props.user_pokemon
    const first = this.decideFirst(this.props.opponent_pokemon)
    const second =
      first === userPokemon ? this.props.opponent_pokemon : userPokemon
    // console.log("Battle Round!")
    this.setState({
      opponent_action,
      messages: [
        ...battleLogic(user_action, opponent_action, userPokemon, first, second)
      ]
    })
  }

  render() {
    // debugger
    // console.log(this.state.messages)
    // console.log(checkMessages(this.state.messages))
    // checkMessages(this.state.messages)
    return (
      <>
        <NavLink to='/'>Quit Battle</NavLink>
        <div className="battle-display">
          <UserField
            battleAction={this.battleAction}
            user={true}
            pokemon={this.props.user_pokemon}
          />
          <div className="simple-ai-rendering">
            <OpponentField pokemon={this.props.opponent_pokemon} />
            <MessagesContainer messages={this.state.messages} />
          </div>
        </div>
        
      </>
    )
  }
}
