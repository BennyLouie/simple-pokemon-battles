const addWin = user => {
    const defaultWins = user.wins
    const wins = defaultWins + 1
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            wins
        })
    })
}

const addLoss = user => {
    const defaultLosses = user.losses
    const losses = defaultLosses + 1
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            losses
        })
    })
}

export { addWin, addLoss }