import React from "react"
import BattlePokemonCard from './BattlePokemonCard'

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
                  <button onClick={() => this.props.battleAction(1)} variant="contained" color="secondary">
                    Attack
                  </button>
                  <button onClick={() => this.props.battleAction(2)} variant="contained" color="primary">
                    Defend
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}