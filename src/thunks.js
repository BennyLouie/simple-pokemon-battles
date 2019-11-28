export const loadUser = () => dispatch => {
  let user = JSON.parse(localStorage.getItem("user"))
  if (localStorage.token) {
    dispatch({
      type: "LOAD_USER",
      payload: {
        token: localStorage.token,
        user_id: localStorage.user_id,
        user,
        pokemons: user ? user.pokemons: []
      }
    })
  }
}

export const getUser = evt => dispatch => {
  // debugger
  return fetch("http://localhost:3000/login", {
    method: "POST",
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
      console.log(data)
      if (data.errors) {
        dispatch({
          type: "ERRORS",
          payload: {
            errors: true
          }
        })
      } else {
        localStorage.token = data.token
        localStorage.user_id = data.user_id
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
            localStorage.setItem("user", JSON.stringify(user))
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

export const logout = () => dispatch => {
  localStorage.token = null
  localStorage.user_id = null
  localStorage.user = null

  dispatch({
    type: "LOGOUT"
  })
}

export const selectPokemon = (pokemon) => dispatch => {
    dispatch({
        type: "SELECT_POKEMON",
        payload: {
            pokemon: pokemon
        }
    })
}

export const fetchOpponent = () => dispatch => {
    const opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
    fetch(`http://localhost:3000/pokemons/${opponent_pokemon_roll}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "FETCH_OPPONENT",
                    payload: {
                        opponent_pokemon: data
                    }
                })
        })
}

export const wildPokemonFetch = () => dispatch => {
  fetch("http://localhost:3000/pokemons")
    .then(res => res.json())
    .then(pokemon => {
      const wildPokemon = pokemon.filter(pokemon => pokemon.id <= 151)
      dispatch({
        type: "WILD_POKEMON",
        payload: {
          wildPokemon
        }
      })
    })
}