const userReducer = (state = [], action) => {
    switch(action.type){
        case 'add':
            return [...state,action.payload]
        case 'remove':
            return state.filter(u => u.id !== action.payload['id'])
        default:
            return state;
    }
}

export default userReducer;