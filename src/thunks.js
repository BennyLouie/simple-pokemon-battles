export const loadUser = () => dispatch => {
  let user = JSON.parse(localStorage.getItem("user"))
  if (localStorage.token) {
    dispatch({
      type: "LOAD_USER",
      payload: {
        token: localStorage.token,
        user_id: localStorage.user_id,
        user,
        pokemons: user ? user.pokemons : []
      }
    })
  }
}

export const getUser = evt => dispatch => {
  evt.preventDefault()
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      username: evt.target.username.value,
      password: evt.target.password.value
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        dispatch({
          type: "ERRORS",
          payload: {
            errors: data.errors
          }
        })
      } else {
        localStorage.token = data.token
        localStorage.user_id = data.user_id
        dispatch({
          type: "GET_TOKEN",
          payload: {
            token: data.token,
            user_id: data.user_id
          }
        })
        return fetch(`http://localhost:3000/users/${data.user_id}`)
          .then(res => res.json())
          .then(user => {
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

export const createUser = evt => dispatch => {
  let username = evt.target.username.value
  let password = evt.target.password.value
  let first_name = evt.target.first_name.value
  let last_name = evt.target.last_name.value

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      wins: 0,
      losses: 0
    })
  })
    .then(res => res.json())
    .then(user => {
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

export const logout = () => dispatch => {
  localStorage.token = null
  localStorage.user_id = null
  localStorage.user = null

  dispatch({
    type: "LOGOUT"
  })
}

export const selectPokemon = pokemon => dispatch => {
  dispatch({
    type: "SELECT_POKEMON",
    payload: {
      pokemon: pokemon
    }
  })
}

export const fetchOpponent = pokemon => dispatch => {
  let opponent_pokemon_roll
  if (pokemon) {
    if (pokemon.lv < 5) {
      opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
    }
    else if (pokemon.lv >= 5 && pokemon.lv < 10) {
      opponent_pokemon_roll = Math.floor(Math.random() * 151) + 303
    }
    else {
      opponent_pokemon_roll = Math.floor(Math.random() * 151) + 454
    }
  }
  else {
    opponent_pokemon_roll = Math.floor(Math.random() * 151) + 1
  }
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
      "Content-Type": "application/json",
      Accept: "application/json"
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
      const pokemon_id = data.id
      const newPokemon = data
      return fetch("http://localhost:3000/captures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
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
                errors: data.errors
              }
            })
          } else {
            user.pokemons.push(newPokemon)
            const newTeam = [...user.pokemons]
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({
              type: "CATCH_POKEMON",
              payload: {
                pokemons: newTeam
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
      const captured = captures.find(
        capture => capture.pokemon.id === pokemon.id
      )
      return fetch(`http://localhost:3000/captures/${captured.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(resp => resp.json())
        .then(data => {
          const newTeam = user.pokemons.filter(pokemon => pokemon.id !== user.pokemons[user.pokemons.findIndex(pokemon => pokemon.id === data.id)].id)
          user.pokemons.splice(
            user.pokemons.findIndex(pokemon => pokemon.id === data.id),
            1
          )
          localStorage.setItem("user", JSON.stringify(user))
          dispatch({
            type: "RELEASE_POKEMON",
            payload: {
              pokemons: newTeam
            }
          })
        })
    })
}

export const addWin = (user, pokemon) => dispatch => {
  const wins = user.wins + 1
  const exp = pokemon.exp + 5
  const exp_max = pokemon.exp_max + pokemon.exp_max
  const stat_pts = pokemon.stat_pts + 3
  const lv = pokemon.lv + 1
  if (exp === pokemon.exp_max) {
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        lv,
        exp: 0,
        exp_max,
        stat_pts
      })
    })
      .then(res => res.json())
      .then(data => {
        user.pokemons[
          user.pokemons.findIndex(pokemon => pokemon.id === data.id)
        ] = data
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({
          type: "UPDATE_POKEMON",
          payload: {
            pokemons: user.pokemons
          }
        })
      })
  } else {
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        exp
      })
    })
      .then(res => res.json())
      .then(data => {
        user.pokemons[
          user.pokemons.findIndex(pokemon => pokemon.id === data.id)
        ] = data
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({
          type: "UPDATE_POKEMON",
          payload: {
            pokemons: user.pokemons
          }
        })
      })
  }
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      wins
    })
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data))
      dispatch({
        type: "ADD_WIN",
        payload: {
          user: data
        }
      })
    })
}

export const addLoss = user => dispatch => {
  const defaultLosses = user.losses
  const losses = defaultLosses + 1
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      losses
    })
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data))
      dispatch({
        type: "ADD_LOSS",
        payload: {
          user: data
        }
      })
    })
}

export const updateStats = (pokemon, state, user) => dispatch => {
  const hp = state.hp
  const atk = state.atk
  const def = state.def
  const spd = state.spd
  const stat_pts = state.stat_pts
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      hp,
      atk,
      def,
      spd,
      stat_pts
    })
  })
    .then(res => res.json())
    .then(data => {
      user.pokemons[
        user.pokemons.findIndex(pokemon => pokemon.id === data.id)
      ] = data
      localStorage.setItem("user", JSON.stringify(user))
      dispatch({
        type: "UPDATE_POKEMON",
        payload: {
          pokemons: user.pokemons
        }
      })
    })
}

export const updateUser = evt => dispatch => {
  const username = evt.target.password.value
  const id = evt.target.user_id.value
  evt.preventDefault()
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      username
    })
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data))
      dispatch({
        type: "UPDATE_USER",
        payload: {
          user: data
        }
      })
  })
}

export const deleteAccount = user => dispatch => {
  user.pokemons.forEach(pokemon => {
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  })
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json)
    .then(data => {
      localStorage.clear()
      dispatch({
      type: "DELETE_USER"
    })
  })
}