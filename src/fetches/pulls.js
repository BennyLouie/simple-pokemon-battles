const wildPokemon = () => {
  return fetch("http://localhost:3000/pokemons")
    .then(res => res.json())
    .then(data => {
    //   console.log(data)
      return data
    })
}

export default wildPokemon
