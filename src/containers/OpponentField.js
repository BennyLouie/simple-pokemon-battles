import React from "react"
import Box from "@material-ui/core/Box"
import BattlePokemonCard from './BattlePokemonCard'

export default class OpponentField extends React.Component {

    render() {
    //   console.log(this.props)
      return (
        <Box>
          <BattlePokemonCard hp={this.props.hp} pokemon={this.props.pokemon} />
        </Box>
      )
  }
}