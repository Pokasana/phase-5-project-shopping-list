import React, { useEffect, useState } from "react";

function Login({usersList, isLoaded, handleUserLogin, currentUser}) {

    if (!isLoaded) return <h3>Loading...</h3>

    function clickHandler(e) {
        const user =  e.target.value
        handleUserLogin(user)
    }
    
    return (
        <div className='login'>
            <h1>User Login Page</h1>

            <div className="user-select">
                <h3>Log in as...</h3>
                <ul>
                    {usersList.map(user => {
                        const { id, name } = user
                        return (
                          <li key={id} onClick={clickHandler}>{name}</li>
                        )
                    })}
                </ul>
            </div>

            <form>
                <h3>Add a new user</h3>
                <input type="text" value={currentUser}/>
				<button type="submit">Add</button>
            </form>

        </div>
    )
}

export default Login;
    