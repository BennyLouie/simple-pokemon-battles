import React from "react"
import "./App.css"
import Box from "@material-ui/core/Box"
import { Route, Switch, Redirect, NavLink, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { loadUser, getUser, logout, selectPokemon, fetchOpponent } from "./thunks"
import BattleContainer from "./containers/BattleContainer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./containers/HomePage"
import { addWin, addLoss } from './fetches/patches'
import { createUser } from './fetches/posts'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  loadUser: loadUser,
  getUser: getUser,
  logout: logout,
  selectPokemon: selectPokemon,
  fetchOpponent: fetchOpponent
}

class App extends React.Component {

  componentDidMount() {
    this.props.loadUser()
    this.props.fetchOpponent()
  }

  getUser = (evt) => {
    this.props.getUser(evt)
    this.props.fetchOpponent()
  }

  fetchUser = (evt) => {
    evt.preventDefault()
    this.getUser(evt)
  }

  createUser = (evt) => {
    evt.preventDefault()
    createUser(evt)
    .then(this.getUser(evt))
  }

  logout = () => {
    this.props.logout()
  }

  selectPokemon = (pokemon) => {
    this.props.selectPokemon(pokemon)
  }

  render() {
    console.log(this.props)
    return (
      <Box className="app-browser">
        {this.props.user ? <NavLink to='/login' onClick={this.logout}>Logout</NavLink> : null}
        <Switch>
          <Route exact path="/" render={props => <HomePage user={this.props.user} pokemons={this.props.pokemons} selectPokemon={this.selectPokemon} />} />
          <Route path="/login" render={props => <Login fetchUser={this.fetchUser}/>} />
          <Route path="/signup" render={props => <Signup createUser={this.createUser}/>} />
          <Route path="/battle" render={props => <BattleContainer addLoss={ addLoss } addWin={ addWin } user={this.props.user} opponent_pokemon={this.props.opponent_pokemon} user_pokemon={this.props.user ? this.props.selected_pokemon : {}} />} />
        </Switch>
        {this.props.user ? <Redirect to="" /> : <Redirect to="login" />}
      </Box>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
