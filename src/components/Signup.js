import React from "react"
import { NavLink } from "react-router-dom"

export default class Signup extends React.Component {
  render() {
    return (
      <div className="div-form">
        <form onSubmit={this.props.createUser}>
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
          <input type="submit" value="Sign Up" className="btn-item" />
          <NavLink to="/login" className="btn-item">
            {" "}
            Log In{" "}
          </NavLink>
        </form>
        <br />
      </div>
    )
  }
}
