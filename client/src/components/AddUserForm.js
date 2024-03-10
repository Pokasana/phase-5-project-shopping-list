import React, { useState } from "react";

function AddUserForm({ onAddUser }) {
  const [newUser, setNewUser]  = useState()

  function handleInput(e) {
    console.log('changing...')
    setNewUser(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
    console.log(newUser)

    fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(r => r.json())
    .then(newUser => {
      console.log(newUser);
    })
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