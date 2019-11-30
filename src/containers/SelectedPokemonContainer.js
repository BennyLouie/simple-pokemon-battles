import React from "react"
import Pokemon from "../components/Pokemon"
import { NavLink } from "react-router-dom"
import StatsContainer from "./StatsContainer"

export default class SelectedPokemonContainer extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <>
        <NavLink to="/">Back</NavLink>
        <Pokemon pokemon={this.props.pokemon} />
        <StatsContainer pokemon={this.props.pokemon} />
      </>
    )
  }
}
