const releasePokemon = (pokemon) => {
    return fetch(`http://localhost:3000/captures`)
        .then(res => res.json())
        .then(captures => {
            //Working on fixing this...
            console.log(pokemon)
            console.log(captures.find(capture => {
                return capture.pokemon === pokemon
            }))
    })
}

export { releasePokemon }