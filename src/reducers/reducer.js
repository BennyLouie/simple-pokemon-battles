///Currently I've hard coded the initial selected pokemon but I expect this page to not render unless there is a selected pokemon...

const initialState = {
  token: null,
  user_id: null,
  user: null,
  pokemons: [],
  selected_pokemon: {},
  errors: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      // console.log(action.payload)
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        user: action.payload.user,
        pokemons: action.payload.pokemons
      }
    case "ERRORS":
      return {
        ...state,
        errors: action.payload.errors
      }
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id
      }
    case "GET_USER":
      return {
        ...state,
        user: action.payload.user,
        pokemons: action.payload.pokemons
      }
    case "LOGOUT":
      return {
        initialState
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
