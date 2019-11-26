import React from "react"
// import Box from "@material-ui/core/Box"
import Pokemon from '../components/Pokemon'

export default class BattlePokemonCard extends React.Component {

    render() {
        console.log(this.props.pokemon.name)
      console.log(document.getElementById(`${this.props.pokemon.name}-health`))
        return (
          <div>
            <Pokemon
              user={this.props.user ? this.props.user : false}
              pokemon={this.props.pokemon}
            />
            <progress
              id={`${this.props.pokemon.name}-health`}
              value={this.props.pokemon.hp}
              max={this.props.pokemon.hp}
            />
            <h3>
              {document.getElementById(`${this.props.pokemon.name}-health`)
                ? document.getElementById(`${this.props.pokemon.name}-health`)
                    .value
                : 0}
              /{document.getElementById(`${this.props.pokemon.name}-health`) ? document.getElementById(`${this.props.pokemon.name}-health`).max : 0}
            </h3>
          </div>
        )
    }
}