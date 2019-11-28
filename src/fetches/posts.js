const createUser = evt => {
  let username = evt.target.username.value
  let password = evt.target.password.value
  let first_name = evt.target.first_name.value
  let last_name = evt.target.last_name.value

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      password
    })
  })
    .then(res => res.json())
      .then(data => {
        console.log(data)
      return data
    })
}

const catchPokemon = (user, pokemon) => {
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
      hp: Math.floor(Math.random() * 5) + 11,
      atk: Math.floor(Math.random() * 5) + 6,
      def: Math.floor(Math.random() * 5) + 6,
      spd: Math.floor(Math.random() * 5) + 6,
      stat_pts: 0
    })
  })
    .then(res => res.json())
    .then(data => {
    console.log(data)
  })

}

export { createUser, catchPokemon }
