import React from "react"
import Pokemon from "../components/Pokemon"

export default class WildPokemon extends React.Component {
  render() {
    return (
      <>
            <Pokemon pokemon={this.props.pokemon}/>
      </>
    )
  }
}
