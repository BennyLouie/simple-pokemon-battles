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
            <BattleContainer user_pokemon={this.props.selected_pokemon} />
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