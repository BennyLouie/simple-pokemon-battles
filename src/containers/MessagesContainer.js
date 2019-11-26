import React from 'react'
// import Box from "@material-ui/core/Box"
import Message from '../components/Message'

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default class MessagesContainer extends React.Component {

    constructor(props) {
        super(props)
        this.scrollRefContainer = React.createRef()
        
    }

    getMessage = message => {
        return sleep(1000).then(v => message)
    }

    messageLoop = async _ => {
        // console.log('Start!')
        const promises = this.props.messages.map(async message => {
            const singleMessage = await this.getMessage(message)
            console.log(singleMessage)
            return singleMessage
        })
        // console.log(promises)
        const messageList = await Promise.all(promises)
        // console.log(messageList)
        return messageList
    }



    componentDidUpdate() {
    this.scrollRefContainer.current.scrollTop = 99999999999999999999
    }

    render() {
        // this.messageLoop().then(messages => console.log(messages))
        this.messageLoop()
        return (
          <div className="messages-container" ref={this.scrollRefContainer}>
                {/* {this.props.messages.map((message, idx) => <Message key={idx} message={message} />)} */}
                {this.messageLoop}
          </div>
        )
    }
}