import React from "react"
import Box from "@material-ui/core/Box"

export default class Pokemon extends React.Component {
    
    render() {
        // console.log(this.props)
        return (
            <Box className='card'>
                <h2>{this.props.pokemon.name}</h2>
                <img className='pokemon-img' src={this.props.user ? this.props.pokemon.back_img : this.props.pokemon.front_img} alt={this.props.pokemon.name} />
            </Box>
        )
    }
}