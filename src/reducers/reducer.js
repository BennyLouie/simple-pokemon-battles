///Currently I've hard coded the initial selected pokemon but I expect this page to not render unless there is a selected pokemon...

const initialState = {
  user: {},
  user_id: "",
  pokemons: [],
  selected_pokemon: {
    atk: 5,
    back_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    def: 4,
    exp: 0,
    front_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    hp: 5,
    id: 3,
    lv: 1,
    name: "Jigglypuff",
    spd: 2,
    stat_pts: 0
  }
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