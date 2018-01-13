import React from 'react';
import './Users.css';
import UserSearch from './components/UserSearch/UserSearch';
import UserContent from './components/UserContent/UserContent';

const Users = props => {
  console.log(props);

  return (
    <div className="users">
      <header className="users-header">
        <h2>Users</h2>
        <h3 className="h5">Let me help you to find info about user</h3>
      </header>
      <div className="users-form">
        <UserSearch />
      </div>
      <UserContent />
    </div>
  );
}



export default Users;