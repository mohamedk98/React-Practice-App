import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) =>{
    setUsersList(prevUsersList =>{
      return [...prevUsersList,{name:username,age:age,id:Math.random().toString()}];
    })
  }
  const deleteUserHandler = (id) => {

    setUsersList(prevUsersList =>{
      const updatedList =prevUsersList.filter(user=> {user.id === id})
      return  updatedList
    })

  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler}   />
    </React.Fragment>
  );
}

export default App;
