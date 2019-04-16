import React, { useState } from "react";
import UserTable from "../UserTable/UserTable";
import Form from "../Form/Form";
import Avatar from '../Picture/UserAvatar'; 

const App = () => {
  const userData = [
    {
      id: 1,
      name: "Homer",
      username: "floppydiskette"
    },
    {
      id: 2,
      name: "Bender",
      username: "king"
    },
    {
      id: 3,
      name: "Filip",
      username: "benisphere"
    }
  ];

  const [users, setUsers] = useState(userData);

const addUser = user => {
  user.id = users.length + 1;
  setUsers([...users, user]);
}

const deleteUser = e => {
  const {id} = e.target;
  setUsers(users.filter(el=> el.id !== Number(id)));
}


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>

      <div className="flex-row">

        <div className="flex-large">
          <h2>Add user</h2>
          <Form add={addUser}/>
          <Avatar />
        </div>

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>

      </div>
    </div>
  );
};

export default App;
