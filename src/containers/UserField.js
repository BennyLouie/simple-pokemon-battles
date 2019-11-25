import React from "react"
// import Box from "@material-ui/core/Box"
import BattlePokemonCard from './BattlePokemonCard'
// import MessagesContainer from './MessagesContainer'
import Button from "@material-ui/core/Button"

export default class UserField extends React.Component {

    render() {
        // console.log(this.props.pokemon.hp)
        return (
          <div className='user-battle-screen'>
            <div className='user-battle-interface'>
              <div>
                <div>
                  <BattlePokemonCard
                    user={this.props.user}
                    pokemon={this.props.pokemon}
                  />
                </div>
                <div>
                  <Button onClick={() => this.props.battleAction(1)} variant="contained" color="secondary">
                    Attack
                  </Button>
                  <Button onClick={() => this.props.battleAction(2)} variant="contained" color="primary">
                    Defend
                  </Button>
                </div>
              </div>
            </div>
            {/* <MessagesContainer /> */}
          </div>
        )
    }
}