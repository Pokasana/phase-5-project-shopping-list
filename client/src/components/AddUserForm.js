import React, { useState } from "react";

function AddUserForm({ addNewUser }) {
  const [newUser, setNewUser]  = useState("")

  function handleInput(e) {
    console.log('changing...')
    setNewUser(e.target);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new user</h3>
      <input type="text" value={newUser} onChange={handleInput}/>
      <button type="submit">Add</button>
    </form>
  )
};

export default AddUserForm;