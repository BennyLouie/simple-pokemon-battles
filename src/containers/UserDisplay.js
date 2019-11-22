import React from "react"
import { connect } from "react-redux"
import { loadUser } from '../thunks'
import BattleContainer from './BattleContainer'

class UserDisplay extends React.Component {

    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        // console.log(this.props)
        return (
            <BattleContainer user_pokemon={this.props.selected_pokemon ? this.props.selected_pokemon : {atk: 5, back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", def: 4, exp: 0, front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", hp: 4, id: 3, lv: 1, name: "Venasaur", spd: 2, stat_pts: 0}} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    loadUser: loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay)