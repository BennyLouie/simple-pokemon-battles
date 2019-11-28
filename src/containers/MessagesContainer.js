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
      battleWon: false,
      battleLost: false
    }
  }

  getMessage = message => {
    return sleep(500).then(v => message)
  }

  messageLoop = async _ => {
    if (!this.state.battleWon && !this.state.battleLost) {
      for (let i = 0; i < this.props.messages.length; i++) {
        const message = this.props.messages[i]
        const renderMessage = await this.getMessage(message)
        const messageContainer = document.querySelector(".messages-container")
        const htmlMessage = document.createElement("h4")
        htmlMessage.className = "message"
        htmlMessage.innerText = renderMessage
        messageContainer.append(htmlMessage)
        this.scrollRefContainer.current.scrollTop = 99999999999999999999
        console.log(this.props.messages.length) 
        // console.log(message.match(/wins/g))
        if (message.match(/wins/g)) {
          this.setState({
            battleWon: true
          })
          this.props.addWin(this.props.user)
        }
        else if (message.match(/lost/g)) {
          this.setState({
            battleLost: true
          })
          this.props.addLoss(this.props.user)
        }
      }
    }
  }

  // componentDidUpdate() {
  //     this.scrollRefContainer.current.scrollTop = 99999999999999999999
  // }

  render() {
    this.messageLoop()
    return (
      <>
        <div className="messages-container" ref={this.scrollRefContainer}></div>
        {this.state.battleWon || this.state.battleLost ? <Redirect to="/" /> : null}
      </>
    )
  }
}
