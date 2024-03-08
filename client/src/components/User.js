import React, { useEffect, useState } from "react";

function Users({usersList, isLoaded}) {

    if (!isLoaded) return <h3>Loading...</h3>
    
    return (
        <div className='users_edit'>
            <h1>Log in as...</h1>
            <ol>
                {usersList.map(user => {
                    const { id, name } = user
                    return <li key={id}>{name}</li>
                })}
            </ol>
        </div>
    )
}

export default Users;
    