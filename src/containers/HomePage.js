import React from "react"
import TeamContainer from "./TeamContainer"
import { NavLink } from "react-router-dom"

export default class HomePage extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <>
        <div>
          <TeamContainer
            pokemons={this.props.pokemons}
            selectPokemon={this.props.selectPokemon}
            releasePokemon={this.props.releasePokemon}
            user={this.props.user}
          />
          <NavLink to="/catch">Catch New Pokemon!</NavLink>
        </div>
        <NavLink to="/user-information">User Info</NavLink>
      </>
    )
  }
}
