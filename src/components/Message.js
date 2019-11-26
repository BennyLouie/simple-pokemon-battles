import React from "react"
// import Box from "@material-ui/core/Box"

export default class Message extends React.Component {

    render() {
        return (
            <h4 className='message'>{this.props.message}</h4>
        )
    }
}