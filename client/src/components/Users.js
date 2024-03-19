import React from "react";
import AddUserForm from "./AddUserForm"

function Users({usersList, isLoaded, clickHandler, refresh}) {

	if (!isLoaded) return <h3>Loading...</h3>
	
	return (
		<div className='users'>
			<h1>User Page</h1>

			<div className="user-select">
				<h3>User List</h3>
				<ul>
					{usersList.map(user => {
						const { id, name } = user

						return (
							<li key={id}>
								{name}
								&nbsp;&nbsp;&nbsp;
								<button onClick={() => {
									clickHandler(id);
								}}>x</button>
							</li>
						)
					})}
				</ul>
			</div>

	<AddUserForm refresh={refresh}/>
	
		</div>
	)
}

export default Users;
    