const releasePokemon = (user, pokemon) => {
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
                console.log(data)
                debugger
                user.pokemons.splice(user.pokemons.indexOf(data), 1)
                console.log(user)
        })
    })
}

export { releasePokemon }
