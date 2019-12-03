import React from "react"
import TeamContainer from "./TeamContainer"
import { NavLink } from "react-router-dom"

export default class HomePage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="pc-substitute">
        <TeamContainer
          pokemons={this.props.pokemons}
          selectPokemon={this.props.selectPokemon}
          releasePokemon={this.props.releasePokemon}
          user={this.props.user}
        />
        <div className="links">
          <NavLink to="/catch" className='catch-pokemon btn'>
            Catch New Pokemon!
          </NavLink>
          <NavLink to="/user-information" className='user-info btn'>User Info</NavLink>
        </div>
      </div>
    )
  }
}
