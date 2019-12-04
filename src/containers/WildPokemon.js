import React from "react"
import Pokemon from "../components/Pokemon"
import { NavLink } from "react-router-dom"

export default class WildPokemon extends React.Component {
  render() {
    return (
      <div className='wild-pokemon'>
        <Pokemon pokemon={this.props.pokemon} />
        <NavLink to="/" className='catch center btn' onClick={() => this.props.catchPokemon(this.props.user, this.props.pokemon)}><strong>Catch!</strong></NavLink>
      </div>
    )
  }
}
