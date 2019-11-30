const initialState = {
  token: null,
  user_id: null,
  user: null,
  pokemons: [],
  wildPokemon: [],
  selected_pokemon: {},
  opponent_pokemon: {},
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
    case "SELECT_POKEMON":
      return {
        ...state,
        selected_pokemon: action.payload.pokemon
      }
    case "FETCH_OPPONENT":
      return {
        ...state,
        opponent_pokemon: action.payload.opponent_pokemon
      }
    case "WILD_POKEMON":
      return {
        ...state,
        wildPokemon: action.payload.wildPokemon
      }
    case "CATCH_POKEMON":
      // console.log(state)
      return {
        ...state,
        pokemons: [...state.pokemons]
      }
    case "RELEASE_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons]
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
