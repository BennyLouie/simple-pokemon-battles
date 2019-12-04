import React from "react"
import { Redirect, NavLink } from "react-router-dom"

export default class UserInfo extends React.Component {
  state = {
    display: false,
    username: ""
  }
  toggleForm = () => {
    this.setState({
      display: !this.state.display
    })
  }

  changeUsername = evt => {
    evt.preventDefault()
    console.log(evt.target.value)
    // this.setState({
    //     username: input
    // })
  }

  render() {
    // console.log(this.props.user)
    return (
      <>
        {this.props.user ? (
          <>
            <NavLink to="/" onClick={this.props.stopAudio} className="flex-end back btn">
              <strong>Back</strong>
            </NavLink>
            <div className="info-container">
              <div className="display user-info">
                <div className="center">
                  <h1>{this.props.user.full_name}</h1>
                  <strong>
                    <p>Wins: {this.props.user.wins}</p>
                  </strong>
                  <strong>
                    <p>Losses: {this.props.user.losses}</p>
                  </strong>
                </div>
                <br />
                <button className="form-toggle btn" onClick={this.toggleForm}>
                  <strong>Change Username</strong>
                </button>
              </div>
              {this.state.display ? (
                <div className="div-form">
                  <form
                    className="form-render"
                    onSubmit={this.props.updateUser}
                  >
                    <h2>Update Username</h2>
                    <input
                      type="hidden"
                      name="user_id"
                      value={this.props.user.id}
                    />
                    <label><strong>Current Username:</strong> {this.props.user.username}</label>
                    <br />
                    <label>
                      <strong>New Username:</strong>
                      <input
                        onChange={this.changeUsername}
                        type="text"
                        name="password"
                      />
                    </label>
                      <input
                        type="submit"
                        value="Update"
                        className="patch btn"
                      />
                  </form>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <Redirect to="" />
        )}
      </>
    )
  }
}
