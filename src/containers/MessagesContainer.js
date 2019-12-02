import React from "react"
import { Redirect } from "react-router-dom"

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.scrollRefContainer = React.createRef()
  }

  getMessage = message => {
    return sleep(500).then(v => message)
  }

  messageLoop = async _ => {
    if (!this.props.battleWon && !this.props.battleLost) {
      for (let i = 0; i < this.props.messages.length; i++) {
        const message = this.props.messages[i]
        const renderMessage = await this.getMessage(message)
        const messageContainer = document.querySelector(".messages-container")
        const htmlMessage = document.createElement("h4")
        htmlMessage.className = "message"
        htmlMessage.innerText = renderMessage
        messageContainer.append(htmlMessage)
        this.scrollRefContainer.current.scrollTop = 99999999999999999999
        // console.log(this.props.messages.length) 
        // console.log(message.match(/wins/g))
        if (message.match(/wins/g)) {
          // this.props.addWin(this.props.user)
          this.props.wonBattle()
        }
        else if (message.match(/lost/g)) {
          // this.props.addLoss(this.props.user)
          this.props.lostBattle()
        }
      }
    }
  }

  // componentDidUpdate() {
  //     this.scrollRefContainer.current.scrollTop = 99999999999999999999
  // }

  render() {
    console.log('Won: ', this.props.battleWon)
    console.log('Lost: ', this.props.battleLost)
    this.messageLoop()
    return (
      <div className="messages-container" ref={this.scrollRefContainer}></div>
    )
  }
}
