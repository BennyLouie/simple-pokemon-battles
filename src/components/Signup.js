import React from "react"
import { NavLink } from "react-router-dom"

export default class Signup extends React.Component {
  render() {
    return (
      <div className="div-form">
        <form className='display-near-top form-render' onSubmit={this.props.createUser}>
          <h1>SIGN UP</h1>
          <label>
            <strong>First Name:</strong>
            <input type="text" name="first_name" />
          </label>
          <label>
            <strong>Last Name:</strong>
            <input type="text" name="last_name" />
          </label>
          <label>
            <strong>Username:</strong>
            <input type="text" name="username" />
          </label>
          <label>
            <strong>Password:</strong>
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Sign Up" className="post bold center btn" />
          <NavLink to="/login" className="patch btn">
            <strong>Log In</strong>
          </NavLink>
        </form>
        <br />
      </div>
    )
  }
}
