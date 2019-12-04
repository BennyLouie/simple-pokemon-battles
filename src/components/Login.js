import React from "react"
import { NavLink } from "react-router-dom"

export default class Login extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="div-form">
        <form className='display-near-top form-render' onSubmit={this.props.fetchUser}>
          <h1>LOG IN</h1>
          {this.props.error ? (
            <>
              <h2 className="error">Error! Try again.</h2>
            </>
          ) : null}
          <label>
            Username:
            <input
            //   onChange={this.props.loginAttempt}
              type="text"
              name="username"
            />
          </label>
          <label>
            Password:
            <input
            //   onChange={this.props.loginAttempt}
              type="password"
              name="password"
            />
          </label>
          <br />
          <input type="submit" value="Log In" className="post center btn" />
          <NavLink to="/signup" className="patch btn">
            Sign Up
          </NavLink>
          <br />
        </form>
      </div>
    )
  }
}
