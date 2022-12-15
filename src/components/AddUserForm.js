import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { usersActionCreators } from '../state/export';

export default function AddUserForm() {

    const [user, setUser] = useState({
        name: '',
        title: ''
    })

    const dispatch = useDispatch();
    const { addUser } = bindActionCreators(usersActionCreators, dispatch)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleAdd = (event) => {
        event.preventDefault();
        addUser({id:Date.now(),...user})
        setUser({
            name: '',
            title: ''
        })
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} type='text' name='name' value={user.name} />
                <input onChange={handleChange} type='text' name='title' value={user.title} />
                <button onClick={handleAdd} >ADD</button>
            </form>
        </div>
    )
}
