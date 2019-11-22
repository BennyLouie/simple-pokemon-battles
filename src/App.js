import React from 'react';
import './App.css';
import Box from "@material-ui/core/Box"
import UserDisplay from './containers/UserDisplay'

class App extends React.Component {
  render(){
    return (
      <Box>
        <UserDisplay />
      </Box>
    )
  }
}

export default App;
