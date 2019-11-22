const initialState = {
    user: {},
    user_id: '',
    pokemons: [],
    selected_pokemon: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOAD_USER":
            // console.log(action.payload)
            return {
              ...state,
              user: action.payload,
              user_id: action.payload.id,
              pokemons: action.payload.pokemons,
              selected_pokemon: action.payload.pokemons[0]
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer