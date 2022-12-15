export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: user
        })
    }
}

export const removeUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: user
        })
    }
}