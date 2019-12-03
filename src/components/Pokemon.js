import React from "react"

export default class Pokemon extends React.Component {
    
    render() {
        // console.log(this.props)
        return (
            <div className='card'>
                <h2>{this.props.pokemon.name}</h2>
                <h3>Lv. {this.props.pokemon.lv}</h3>
                <img className='pokemon-img' src={this.props.user ? this.props.pokemon.back_img : this.props.pokemon.front_img} alt={this.props.pokemon.name} />
            </div>
        )
    }
}