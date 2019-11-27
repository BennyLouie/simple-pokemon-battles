import React from "react"
import "./App.css"
import Box from "@material-ui/core/Box"
import { Route, Switch, Redirect, NavLink, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { loadUser, getUser, createUser, logout } from "./thunks"
import BattleContainer from "./containers/BattleContainer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./containers/HomePage"

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  loadUser: loadUser,
  getUser: getUser,
  createUser: createUser,
  logout: logout
}

class App extends React.Component {

  componentDidMount() {
    this.props.loadUser()
  }

  getUser = (evt) => {
    this.props.getUser(evt)
  }

  fetchUser = (evt) => {
    evt.preventDefault()
    this.getUser(evt)
  }

  createUser = (evt) => {
    evt.preventDefault()
    this.props.createUser(evt)
    .then(this.fetchUser(evt))
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <Box className="app-browser">
        {this.props.user ? <NavLink to='/login' onClick={this.logout}>Logout</NavLink> : null}
        <Switch>
          <Route exact path="/" render={props => <HomePage user={this.props.user} pokemons={this.props.pokemons} />} />
          <Route path="/login" render={props => <Login fetchUser={this.fetchUser}/>} />
          <Route path="/signup" render={props => <Signup createUser={this.createUser}/>} />
          <Route path="/battle" render={props => <BattleContainer user_pokemon={this.props.user ? this.props.selected_pokemon : {}} />} />
        </Switch>
        {this.props.user ? <Redirect to="" /> : <Redirect to="login" />}
      </Box>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
