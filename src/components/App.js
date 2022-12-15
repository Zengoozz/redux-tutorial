import '../css/App.css';
import React from 'react';
import { useSelector } from 'react-redux'
import User from './User';
import AddUserForm from './AddUserForm';

function App() {

  const users = useSelector((state) => state.users)
  // console.log(users);

  return (
    <div className="App">
      {users.map(user => <User key={user.id} user={user}/>)}

      <AddUserForm />
    </div>
  );
}

export default App;
