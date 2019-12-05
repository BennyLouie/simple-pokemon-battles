import React from "react"
import Pokemon from "../components/Pokemon"

export default class BattlePokemonCard extends React.Component {
  render() {
    return (
      <div className="battle-pokemon">
        <Pokemon
          user={this.props.user ? this.props.user : false}
          pokemon={this.props.pokemon}
        />
        <div className="health-bar">
        <progress
          id={`${this.props.pokemon.name}-health`}
          value={this.props.pokemon.hp}
          max={this.props.pokemon.hp}
          />
        <span className='health'>
          <strong>
            {document.getElementById(`${this.props.pokemon.name}-health`)
              ? document.getElementById(`${this.props.pokemon.name}-health`)
                  .value
              : this.props.pokemon.hp}
            /
            {document.getElementById(`${this.props.pokemon.name}-health`)
              ? document.getElementById(`${this.props.pokemon.name}-health`).max
              : this.props.pokemon.hp}
          </strong>
          </span>
        </div>
      </div>
    )
  }
}
