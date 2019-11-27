import React from "react"
import { Redirect } from "react-router-dom"

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.scrollRefContainer = React.createRef()
    this.state = {
      winnerDecided: false
    }
  }

  checkMessage = message => {
    let splitMessage = message.split(" ")
    console.log(splitMessage)
    if (splitMessage.includes("wins!") || splitMessage.includes("lost!")) {
      this.setState({
        winnerDecided: true
      })
      return true
    }
  }

  getMessage = message => {
    return sleep(500).then(v => message)
  }

  messageLoop = async _ => {
    for (let i = 0; i < this.props.messages.length; i++) {
      const message = this.props.messages[i]
      const renderMessage = await this.getMessage(message)
      const messageContainer = document.querySelector(".messages-container")
      const htmlMessage = document.createElement("h4")
      htmlMessage.className = "message"
      htmlMessage.innerText = renderMessage
      this.checkMessage(message) 
      messageContainer.append(htmlMessage)
      this.scrollRefContainer.current.scrollTop = 99999999999999999999
    }
  }

  // componentDidUpdate() {
  //     this.scrollRefContainer.current.scrollTop = 99999999999999999999
  // }

  render() {
    this.messageLoop()
    //   console.log(this.props.winnerDecided)
    return (
      <>
        <div className="messages-container" ref={this.scrollRefContainer}></div>
        {this.state.winnerDecided ? <Redirect to="/" /> : null}
      </>
    )
  }
}
