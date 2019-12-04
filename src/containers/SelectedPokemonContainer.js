import React from "react"
import Pokemon from "../components/Pokemon"
import { NavLink } from "react-router-dom"
import StatsContainer from "./StatsContainer"

export default class SelectedPokemonContainer extends React.Component {
  render() {
    this.props.playStatsAudio()
    return (
      <>
        <NavLink to="/" onClick={this.props.stopAudio} className="flex-end back btn">
          <strong>Back</strong>
        </NavLink>
        <div className='display pokemon-status'>
          <Pokemon pokemon={this.props.pokemon} />
          <StatsContainer
            user={this.props.user}
            pokemon={this.props.pokemon}
            updateStats={this.props.updateStats}
          />
        </div>
      </>
    )
  }
}
