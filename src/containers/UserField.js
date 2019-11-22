import React from "react"
import Box from "@material-ui/core/Box"
import BattlePokemonCard from './BattlePokemonCard'
import MessagesContainer from './MessagesContainer'

export default class UserField extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Box>
                    <BattlePokemonCard pokemon={this.props.pokemon}/>
                </Box>
                <MessagesContainer />
            </React.Fragment>
        )
    }
}