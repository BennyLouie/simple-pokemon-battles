import React from 'react'

export default class UserInfo extends React.Component{

    render() {
        console.log(this.props.user)
        return (
            <h1>User Info</h1>
        )
    }
}