import React from "react"

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
        if (message.match(/wins/g)) {
          this.props.wonBattle()
        }
        else if (message.match(/lost/g)) {
          this.props.lostBattle()
        }
      }
    }
  }

  render() {
    console.log('Won: ', this.props.battleWon)
    console.log('Lost: ', this.props.battleLost)
    this.messageLoop()
    return (
      <div className="messages-container" ref={this.scrollRefContainer}></div>
    )
  }
}
