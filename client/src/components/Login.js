import React, { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm"

function Login({usersList, isLoaded, loginHandler, onAddUser}) {

    if (!isLoaded) return <h3>Loading...</h3>

	function clickHandler(e) {
		const userName  = e.target.innerHTML;
		loginHandler(userName);
	};
    
    return (
        <div className='login'>
            <h1>User Login Page</h1>

            <div className="user-select">
                <h3>Log in as...</h3>
                <ul>
                    {usersList.map(user => {
                        const { id, name } = user
                        return (
													<li key={id} value={"value"} onClick={clickHandler}>{name}</li>
                        )
                    })}
                </ul>
            </div>

			<AddUserForm onAddUser={onAddUser}/>
			
        </div>
    )
}

export default Login;
    