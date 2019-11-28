import React from "react"
import { NavLink } from 'react-router-dom'

export default class WildPokemonContainer extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/">Back</NavLink>
        <h1>Wild Pokemon</h1>
      </>
    )
  }
}
