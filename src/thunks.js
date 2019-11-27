export const loadUser = () => (dispatch) => {
    let user = JSON.parse(localStorage.getItem('user'))
    if (localStorage.token) {
        dispatch({
            type: "LOAD_USER",
            payload: {
                token: localStorage.token,
                user_id: localStorage.user_id,
                // user,
                // pokemons: user.pokemons
            }
        })
    }
}

export const getUser = (evt) => (dispatch) => {
    // debugger
    return fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: evt.target.username.value,
            password: evt.target.password.value
        })
    })
        .then(res => res.json())
        .then(data => {
            // debugger
            if (data.errors) {
               dispatch({
                    type: "ERRORS",
                    payload: {
                        errors: true
                    }
            })
            } else {
                // localStorage.token = data.token
                // localStorage.user_id = data.user_id
               dispatch({
                    type: "GET_TOKEN",
                    payload: {
                        token: data.token,
                        user_id: data.user_id,
                        errors: false
                    }
               })
                return fetch(`http://localhost:3000/users/${data.user_id}`)
                    .then(res => res.json())
                    .then(user => {
                        console.log(user)
                        dispatch({
                            type: "GET_USER",
                            payload: {
                                user,
                                pokemons: user.pokemons
                            }
                        })
                })
        }
    })
}
