export const loadUser = () => (dispatch) => {
    fetch("http://localhost:3000/users/1")
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "LOAD_USER",
                payload: data
        })
    })
}