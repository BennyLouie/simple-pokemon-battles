import React from "react"

export default class Pokemon extends React.Component {
    
    render() {
        // console.log(this.props)
        return (
            <div className='card'>
                <h2 className='label'>{this.props.pokemon.name}</h2>
                <h3 className='label'>Lv. {this.props.pokemon.lv}</h3>
                <h3 className='pokemon-img'><img className='pokemon-pic' src={this.props.user ? this.props.pokemon.back_img : this.props.pokemon.front_img} alt={this.props.pokemon.name} /></h3>
            </div>
        )
    }
}