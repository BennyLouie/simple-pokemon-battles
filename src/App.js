import React from "react"
import "./App.css"
import { Route, Switch, Redirect, NavLink, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  loadUser,
  getUser,
  createUser,
  logout,
  selectPokemon,
  fetchOpponent,
  wildPokemonFetch,
  catchPokemon,
  releasePokemon,
  addWin,
  addLoss,
  updateStats,
  updateUser,
  deleteAccount,
  removeErrors
} from "./thunks"
import BattleContainer from "./containers/BattleContainer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import HomePage from "./containers/HomePage"
import WildPokemonContainer from "./containers/WildPokemonContainer"
import SelectedPokemonContainer from "./containers/SelectedPokemonContainer"
import UserInfo from "./containers/UserInfo"
import battle_music from "./sounds/battle_music.mp3"
import background_music from "./sounds/background_music.mp3"
import wild_pokemon_music from "./sounds/wild_pokemon_music.mp3"
import pc_music from "./sounds/pc_music.mp3"
import poke_status_music from "./sounds/poke_status_music.mp3"
import victory_music from "./sounds/victory_music.mp3"
import losing_music from "./sounds/losing_music.mp3"

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  loadUser: loadUser,
  getUser: getUser,
  createUser: createUser,
  logout: logout,
  selectPokemon: selectPokemon,
  fetchOpponent: fetchOpponent,
  wildPokemonFetch: wildPokemonFetch,
  catchPokemon: catchPokemon,
  releasePokemon: releasePokemon,
  addWin: addWin,
  addLoss: addLoss,
  updateStats: updateStats,
  updateUser: updateUser,
  deleteAccount: deleteAccount,
  removeErrors: removeErrors
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.audio = new Audio(battle_music)
    this.audio.volume = 0.5
    this.audio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.backgroundAudio = new Audio(background_music)
    this.backgroundAudio.volume = 0.5
    this.backgroundAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.safariAudio = new Audio(wild_pokemon_music)
    this.safariAudio.volume = 0.5
    this.safariAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.pcAudio = new Audio(pc_music)
    this.pcAudio.volume = 0.5
    this.pcAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.statusAudio = new Audio(poke_status_music)
    this.statusAudio.volume = 0.5
    this.statusAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.victoryAudio = new Audio(victory_music)
    this.victoryAudio.volume = 0.5
    this.victoryAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.effortAudio = new Audio(losing_music)
    this.effortAudio.volume = 0.5
    this.effortAudio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )
  }

  componentDidMount() {
    this.props.loadUser()
    this.props.wildPokemonFetch()
  }

  getUser = evt => {
    evt.preventDefault()
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
    this.props.createUser(evt)
  }

  logout = () => {
    this.props.logout()
    this.stopAudio()
  }

  selectPokemon = pokemon => {
    this.stopAudio()
    this.audio.play()
    this.props.selectPokemon(pokemon)
    this.props.fetchOpponent(pokemon)
  }

  catch = (user, pokemon) => {
    this.stopAudio()
    this.props.catchPokemon(user, pokemon)
  }

  releasePokemon = (user, pokemon) => {
    this.props.releasePokemon(user, pokemon)
  }

  updateUser = evt => {
    this.props.updateUser(evt)
  }

  addWin = (user, pokemon) => {
    this.props.addWin(user, pokemon)
    this.stopAudio()
  }

  addLoss = (user, pokemon) => {
    this.props.addLoss(user, pokemon)
    this.stopAudio()
  }

  deleteAccount = user => {
    this.stopAudio()
    this.props.deleteAccount(user)
  }

  stopAudio = () => {
    this.audio.pause()
    this.audio.currentTime = 0
    this.backgroundAudio.pause()
    this.backgroundAudio.currentTime = 0
    this.safariAudio.pause()
    this.safariAudio.currentTime = 0
    this.pcAudio.pause()
    this.pcAudio.currentTime = 0
    this.statusAudio.pause()
    this.statusAudio.currentTime = 0
    this.victoryAudio.pause()
    this.victoryAudio.currentTime = 0
    this.effortAudio.pause()
    this.effortAudio.currentTime = 0
  }

  playSafariAudio = () => {
    this.stopAudio()
    this.safariAudio.play()
  }

  playPCAudio = () => {
    this.stopAudio()
    this.pcAudio.play()
  }

  playStatsAudio = () => {
    this.stopAudio()
    this.statusAudio.play()
  }

  playVictoryAudio = () => {
    this.stopAudio()
    this.victoryAudio.play()
  }

  playEffortAudio = () => {
    this.stopAudio()
    this.effortAudio.play()
  }

  render() {
    console.log(this.props.errors)
    return (
      <div className="app-container">
        {this.props.errors ? (
          <div className="alert alert-dark">
            {this.props.errors.map(error => <h2 className='error'>· {error}</h2>)}
          </div>
        ) : null}
        {this.props.user ? (
          <div className="header-container">
            <h1 className="flex-start title">Simple Pokemon Battles</h1>
            <div className='flex-end container'>
              <h2>
                <strong>Welcome {this.props.user.first_name}!</strong>
              </h2>
              <NavLink
                to="/login"
                className="logout btn"
                onClick={this.logout}
              >
                <strong>Logout</strong>
              </NavLink>
            </div>
          </div>
        ) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                pcAudio={this.playPCAudio}
                safariAudio={this.playSafariAudio}
                backgroundAudio={this.backgroundAudio}
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
                removeErrors={this.props.removeErrors}
                victoryAudio={this.playVictoryAudio}
                effortAudio={this.playEffortAudio}
                audio={this.audio}
                stopAudio={this.stopAudio}
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
                removeErrors={this.props.removeErrors}
                stopAudio={this.stopAudio}
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
                removeErrors={this.props.removeErrors}
                playStatsAudio={this.playStatsAudio}
                stopAudio={this.stopAudio}
                user={this.props.user}
                updateStats={this.props.updateStats}
                pokemon={this.props.user ? this.props.selected_pokemon : {}}
              />
            )}
          />
          <Route
            path="/user-information"
            render={props => (
              <UserInfo
                removeErrors={this.props.removeErrors}
                stopAudio={this.stopAudio}
                deleteAccount={this.deleteAccount}
                user={this.props.user}
                updateUser={this.updateUser}
              />
            )}
          />
        </Switch>
        {this.props.user ? <Redirect to="" /> : <Redirect to="login" />}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
