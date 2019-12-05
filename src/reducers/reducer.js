const initialState = {
  token: null,
  user_id: null,
  user: null,
  pokemons: [],
  wildPokemon: [],
  selected_pokemon: {},
  opponent_pokemon: {},
  errors: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        user: action.payload.user,
        pokemons: action.payload.pokemons,
        errors: null
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
        pokemons: action.payload.pokemons,
        errors: null
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
        opponent_pokemon: action.payload.opponent_pokemon,
        errors: null
      }
    case "WILD_POKEMON":
      return {
        ...state,
        wildPokemon: action.payload.wildPokemon
      }
    case "CATCH_POKEMON":
      return {
        ...state,
        pokemons: action.payload.pokemons
      }
    case "RELEASE_POKEMON":
      return {
        ...state,
        pokemons: action.payload.pokemons,
        errors: null
      }
    case "ADD_WIN":
      return {
        ...state,
        user: action.payload.user
      }
    case "ADD_LOSS":
      return {
        ...state,
        user: action.payload.user
      }
    case "UPDATE_POKEMON":
      return {
        ...state,
        pokemons: action.payload.pokemons,
      }
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user
      }
    
    case "DELETE_USER":
      return {
        ...state,
        ...initialState
      }
    case "REMOVE_ERRORS":
      return {
        ...state,
        errors: null
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
