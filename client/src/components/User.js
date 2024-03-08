import React, { useEffect, useState } from "react";

function Users({users, isLoaded}) {

    if (!isLoaded) return <h3>Loading...</h3>

    return (
        <div>
            <ol>
                <li>User 1</li>
            </ol>
        </div>
    )
}

export default Users;
    