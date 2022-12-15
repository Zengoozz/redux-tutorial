import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const users = [
    {
        id: 1,
        name: 'nour',
        title: 'web developer'
    },
    {
        id: 2,
        name: 'ahmed',
        title: 'frontend developer'
    },
    {
        id: 3,
        name: 'zengo',
        title: 'backend developer'
    },
    {
        id: 4,
        name: 'shady',
        title: 'mobile developer'
    },
]

const reducers = combineReducers({ users: userReducer })

const store = createStore(
    reducers,
    { users },
    applyMiddleware(thunk)
)

export default store;