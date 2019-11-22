import React from "react"
import Box from "@material-ui/core/Box"
import BattlePokemonCard from './BattlePokemonCard'

export default class UserField extends React.Component {

    render() {
        return (
          <Box>
            <BattlePokemonCard />
          </Box>
        )
    }
}