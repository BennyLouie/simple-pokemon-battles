import React from "react"
import TeamContainer from "./TeamContainer"
import { NavLink } from "react-router-dom"

export default class HomePage extends React.Component {
  render() {
    this.props.backgroundAudio.play()
    return (
      <div className="pc-substitute">
        <TeamContainer
          pokemons={this.props.pokemons}
          selectPokemon={this.props.selectPokemon}
          releasePokemon={this.props.releasePokemon}
          user={this.props.user}
        />
        <div className="links">
          <NavLink to="/catch" onClick={this.props.safariAudio} className='catch-pokemon btn'>
            <strong>Safari</strong>
          </NavLink>
          <NavLink to="/user-information" onClick={this.props.pcAudio} className='info btn'><strong>User Info</strong></NavLink>
        </div>
      </div>
    )
  }
}
