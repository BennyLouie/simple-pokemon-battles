import React from "react"
import Box from "@material-ui/core/Box"

export default class BattlePokemonCard extends React.Component {

    render() {
        console.log(this.props.pokemon)
        return (
          <Box>
            <h1>{this.props.pokemon.name}</h1>
          </Box>
        )
    }
}