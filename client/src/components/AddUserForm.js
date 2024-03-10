import React, { useState } from "react";

function AddUserForm({ onAddUser }) {
  const [formData, setFormData]  = useState("")

  function handleInput(e) {
    setFormData(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
    console.log(formData)

    fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newUser => {
      console.log(newUser);
      onAddUser(newUser);
    })

    setFormData("")

  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new user</h3>
      <input type="text" value={formData} onChange={handleInput}/>
      <button type="submit">Add</button>
    </form>
  )
};

export default AddUserForm;