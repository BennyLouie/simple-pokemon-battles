import React from "react"
import BattlePokemonCard from './BattlePokemonCard'

export default class UserField extends React.Component {

    render() {
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
                  <button className='attack btn' onClick={() => this.props.battleAction(1)} variant="contained" color="secondary">
                    <strong>Attack</strong>
                  </button>
                  <button className='defend btn' onClick={() => this.props.battleAction(2)} variant="contained" color="primary">
                    <strong>Defend</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}