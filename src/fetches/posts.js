const createUser = evt => {
  let username = evt.target.username.value
  let password = evt.target.password.value
  let first_name = evt.target.first_name.value
  let last_name = evt.target.last_name.value

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      wins: 0,
      losses: 0
    })
  })
    .then(res => res.json())
      .then(data => {
        console.log(data)
      return data
    })
}

export { createUser }
