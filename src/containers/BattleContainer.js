import React from "react"
import UserField from './UserField'
import OpponentField from './OpponentField'
import Box from "@material-ui/core/Box"

export default class BattleContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Box>
                <UserField />
                <OpponentField />
            </Box>
        )
    }
}