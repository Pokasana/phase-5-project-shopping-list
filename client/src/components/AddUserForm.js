import React, { useState } from "react";

function AddUserForm({ addNewUser }) {
    const [newUser, setNewUser]  = useState("")

    function handleInput(e) {
        setNewUser(e.target);
    };

    function handleSubmit(e) {
        e.preventDefault();
        addNewUser(newUser)
    }

    return (
        <form>
            <h3>Add a new user</h3>
            <input type="text" value={newUser} onChange={handleInput}/>
            <button type="submit" onSubmit={handleSubmit}>Add</button>
        </form>
    )
};

export default AddUserForm;