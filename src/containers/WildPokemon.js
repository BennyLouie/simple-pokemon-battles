import React from "react"
import Pokemon from "../components/Pokemon"
import { NavLink } from "react-router-dom"

export default class WildPokemon extends React.Component {
  render() {
    return (
      <>
        <Pokemon pokemon={this.props.pokemon} />
        <NavLink to="/" onClick={() => this.props.catchPokemon(this.props.user, this.props.pokemon)}>Catch!</NavLink>
      </>
    )
  }
}
