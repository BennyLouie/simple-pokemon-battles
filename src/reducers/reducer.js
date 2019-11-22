const initialState = {
    user: null,
    user_id: '',
    pokemons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOAD_USER":
            // console.log(action.payload)
            return {
              ...state,
              user: action.payload,
              user_id: action.payload.id,
              pokemons: action.payload.pokemons
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer