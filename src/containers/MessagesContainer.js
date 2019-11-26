import React from 'react'
// import Box from "@material-ui/core/Box"
import Message from '../components/Message'

export default class MessagesContainer extends React.Component {

    constructor() {
        super()
        this.scrollRefContainer = React.createRef()
    }

    componentDidUpdate() {
    this.scrollRefContainer.current.scrollTop = 99999999999999999999
    }

    render() {
        console.log(this.props.messages)
        return (
            <div className='messages-container' ref={this.scrollRefContainer}>
                {this.props.messages.map((message, idx) => <Message key={idx} message={message} />)}
            </div>
        )
    }
}