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
    console.log(this.props.user)
    return (
      <>
        {this.props.user ? (
          <>
            <NavLink to="/" className="flex-end back btn">
              <strong>Back</strong>
            </NavLink>
            <div className='display user-info'>
              <h1 className='center'>{this.props.user.full_name}</h1>
              <p className='center'>Wins: {this.props.user.wins}</p>
              <p className='center'>Losses: {this.props.user.losses}</p>
              <br />
              <button className='form-toggle btn' onClick={this.toggleForm}>Change Username</button>
              {this.state.display ? (
                <div className="div-form">
                  <form className='form-render' onSubmit={this.props.updateUser}>
                    <h2>Update Username</h2>
                    <input
                      type="hidden"
                      name="user_id"
                      value={this.props.user.id}
                    />
                    <label>Current Username: {this.props.user.username}</label>
                    <br />
                    <label>
                      New Username:{" "}
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
