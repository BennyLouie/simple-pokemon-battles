import React from 'react'
// import Box from "@material-ui/core/Box"
import Message from '../components/Message'

export default class MessagesContainer extends React.Component {

    render() {
        // console.log(this.props.messages)
        return (
            <div className='messages-container'>
                {this.props.messages.map((message, idx) => <Message key={idx} message={message} />)}
            </div>
        )
    }
}