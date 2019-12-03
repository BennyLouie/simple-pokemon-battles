import React from "react"
import BattlePokemonCard from './BattlePokemonCard'

export default class OpponentField extends React.Component {

    render() {
    //   console.log(this.props)
      return (
        <div className='opponent-battle-screen'>
          <div className='opponent-battle-display'>
            <BattlePokemonCard hp={this.props.pokemon.hp} pokemon={this.props.pokemon} />
          </div>
        </div>
      )
  }
}