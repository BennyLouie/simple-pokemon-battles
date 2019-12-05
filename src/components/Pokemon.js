import React from "react"
import { Card, Image } from 'semantic-ui-react'

export default class Pokemon extends React.Component {
    
    render() {
        return (
            <Card>
                <Image className='ui small centered' style={{'background': 'none'}} src={this.props.user ? this.props.pokemon.back_img : this.props.pokemon.front_img} alt={this.props.pokemon.name} />
                <Card.Content style={{ 'background': 'black'}}>
                <Card.Header style={{'color': 'white'}}>{this.props.pokemon.name}</Card.Header>
                <Card.Meta style={{'color': 'white'}}>Lv. {this.props.pokemon.lv}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}