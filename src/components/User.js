import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {usersActionCreators} from '../state/export'

export default function User({user}) {
    const dispatch = useDispatch();
    const {removeUser} = bindActionCreators(usersActionCreators, dispatch)

    const handleDelete = (user) => {
        removeUser(user)
    }

    const handleEdit = (user) => {

    }

  return (
    <div>
        <p>{user.name}</p>
        <button onClick={() => handleEdit(user)}>
            Edit
        </button>
        <button onClick={() => handleDelete(user)}>
            DELETE
        </button>
    </div>
  )
}
