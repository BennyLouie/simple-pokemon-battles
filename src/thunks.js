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

export const catchPokemon = (user, pokemon) => dispatch => {
  const user_id = user.id
  return fetch("http://localhost:3000/pokemons", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: pokemon.name,
      front_img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      back_img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`,
      lv: 1,
      exp: 0,
      exp_max: 10,
      hp: Math.floor(Math.random() * 5) + 11,
      atk: Math.floor(Math.random() * 5) + 6,
      def: Math.floor(Math.random() * 5) + 6,
      spd: Math.floor(Math.random() * 5) + 6,
      stat_pts: 0
    })
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      const pokemon_id = data.id
      const newPokemon = data
      return fetch("http://localhost:3000/captures", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_id,
          pokemon_id
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            dispatch({
              type: "ERRORS",
              payload: {
                errors: true
              }
          })
          } else {
            user.pokemons.push(newPokemon)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({
              type: "CATCH_POKEMON",
              payload: {
                pokemons: user.pokemons
              }
            })
        }
      })
  })

}

export const releasePokemon = (user, pokemon) => dispatch => {
  return fetch(`http://localhost:3000/captures`)
    .then(res => res.json())
    .then(captures => {
    //   console.log(pokemon)
        console.log(captures)
        // debugger
      const captured = captures.find(capture => capture.pokemon.id === pokemon.id)
        return fetch(`http://localhost:3000/captures/${captured.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                // debugger
              user.pokemons.splice(user.pokemons.findIndex(pokemon => pokemon.id === data.id), 1)
              localStorage.setItem("user", JSON.stringify(user))
              // console.log(user)
              dispatch({
                type: 'RELEASE_POKEMON',
                payload: {
                  pokemons: user.pokemons
                }
              })
        })
    })
}