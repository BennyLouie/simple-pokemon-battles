import React from "react"
import { NavLink } from "react-router-dom"
import WildPokemon from "./WildPokemon"

export default class WildPokemonContainer extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/" onClick={this.props.stopAudio} className='flex-end back btn'><strong>Back</strong></NavLink>
        <div className="wild-pokemon-container">
          {this.props.wildPokemon.map((pokemon, idx) => (
            <WildPokemon key={idx} user={this.props.user} pokemon={pokemon} catchPokemon={this.props.catchPokemon} />
          ))}
        </div>
      </>
    )
  }
}
