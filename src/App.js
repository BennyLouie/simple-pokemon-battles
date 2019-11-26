import React from 'react';
import './App.css';
import Box from "@material-ui/core/Box"
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { loadUser } from './thunks'
import BattleContainer from './containers/BattleContainer'

const mapStateToProps = state => {
  return {
      ...state
  }
}

const mapDispatchToProps = {
  loadUser: loadUser
}

class App extends React.Component {

  componentDidMount() {
    this.props.loadUser()
  }


  render(){
    return (
      <Box className='app-browser'>
        <Switch>
          <Route path='/battle' render={(props) => <BattleContainer user_pokemon={this.props.selected_pokemon} />} />
        </Switch>


        <Redirect to='battle' />
      </Box>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
