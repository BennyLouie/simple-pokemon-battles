import React from "react"
import "./App.css"
import { Route, Switch, Redirect, NavLink, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  loadUser,
  getUser,
  logout,
  selectPokemon,
  fetchOpponent,
  wildPokemonFetch,
  catchPokemon,
  releasePokemon,
  addWin,
  addLoss,
  updateStats,
  updateUser
} from "./thunks"
import BattleContainer from "./containers/BattleContainer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./containers/HomePage"
import WildPokemonContainer from "./containers/WildPokemonContainer"
import { createUser } from "./fetches/posts"
import SelectedPokemonContainer from "./containers/SelectedPokemonContainer"
import UserInfo from "./containers/UserInfo"
import battle_music from './sounds/battle_music.mp3'

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
  fetchOpponent: fetchOpponent,
  wildPokemonFetch: wildPokemonFetch,
  catchPokemon: catchPokemon,
  releasePokemon: releasePokemon,
  addWin: addWin,
  addLoss: addLoss,
  updateStats: updateStats,
  updateUser: updateUser
}

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser()
    this.props.wildPokemonFetch()
    // debugger
    // this.props.fetchOpponent()
  }

  getUser = evt => {
    this.props.getUser(evt)
    this.props.wildPokemonFetch()
    this.props.fetchOpponent(this.props.selected_pokemon)
  }

  fetchUser = evt => {
    evt.preventDefault()
    this.getUser(evt)
  }

  createUser = evt => {
    evt.preventDefault()
    createUser(evt).then(this.getUser(evt))
  }

  logout = () => {
    this.props.logout()
  }

  selectPokemon = pokemon => {
    this.props.selectPokemon(pokemon)
    this.props.fetchOpponent(pokemon)
  }

  catch = (user, pokemon) => {
    this.props.catchPokemon(user, pokemon)
  }

  releasePokemon = (user, pokemon) => {
    this.props.releasePokemon(user, pokemon)
    // console.log(this.props.pokemons)
    // debugger
  }

  updateUser = evt => {
    // evt.preventDefault()
    this.props.updateUser(evt)
  }

  addWin = (user, pokemon) => {
    this.props.addWin(user, pokemon)
    this.audio.pause()
    this.audio.currentTime = 0
  }
  
  addLoss = (user, pokemon) => {
    this.props.addLoss(user, pokemon)
    this.audio.pause()
    this.audio.currentTime = 0
  }

  audio = new Audio(battle_music)
  
  render() {
    // console.log(this.wildPokemon())
    console.log(this.props)
    return (
      <div className='app-container'>
      {this.props.errors ?
        <div className='alert alert-dark'>
          <h1>{this.props.errors}</h1>
        </div>
        : null}
        {this.props.user ? (
          <NavLink to="/login" className='flex-end logout btn' onClick={this.logout}>
            <strong>Logout</strong>
          </NavLink>
        ) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                user={this.props.user}
                pokemons={this.props.pokemons}
                selectPokemon={this.selectPokemon}
                releasePokemon={this.releasePokemon}
              />
            )}
          />
          <Route
            path="/login"
            render={props => <Login fetchUser={this.fetchUser} />}
          />
          <Route
            path="/signup"
            render={props => <Signup createUser={this.createUser} />}
          />
          <Route
            path="/battle"
            render={props => (
              <BattleContainer
                audio={this.audio}
                fetchOpponent={this.props.fetchOpponent}
                addLoss={this.addLoss}
                addWin={this.addWin}
                user={this.props.user}
                opponent_pokemon={this.props.opponent_pokemon}
                user_pokemon={
                  this.props.user ? this.props.selected_pokemon : {}
                }
              />
            )}
          />
          <Route
            path="/catch"
            render={props => (
              <WildPokemonContainer
                user={this.props.user}
                catchPokemon={this.catch}
                wildPokemon={this.props.wildPokemon}
              />
            )}
          />
          <Route
            path="/update-pokemon"
            render={props => (
              <SelectedPokemonContainer
                user={this.props.user}
                updateStats={this.props.updateStats}
                pokemon={this.props.user ? this.props.selected_pokemon : {}}
              />
            )}
          />
          <Route
            path="/user-information"
            render={props => (
              <UserInfo user={this.props.user} updateUser={this.updateUser} />
            )}
          />
        </Switch>
        {this.props.user ? <Redirect to="" /> : <Redirect to="login" />}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
