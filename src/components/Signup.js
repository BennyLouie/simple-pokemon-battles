import React from "react"
import { NavLink } from "react-router-dom"

export default class Signup extends React.Component {
  render() {
    return (
      <div className="div-form">
        <form className='display-near-top form-render' onSubmit={this.props.createUser}>
          <h1>SIGN UP</h1>
          <label>
            First Name:
            <input type="text" name="first_name" />
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" />
          </label>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Sign Up" className="post center btn" />
          <NavLink to="/login" className="patch btn">
            <strong>Log In</strong>
          </NavLink>
        </form>
        <br />
      </div>
    )
  }
}
