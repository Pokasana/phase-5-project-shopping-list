import React from "react";
import AddUserForm from "./AddUserForm"

import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'

function Users({ clickHandler, refresh }) {

	const users = useSelector(selectAllUsers)

	const renderedUsers = users.map(user => {
		const { id, name } = user

		return (
			<li key={id}>
				{name}
				&nbsp;&nbsp;&nbsp;
				<button 
					className="emoji_button"
					style={{fontSize: "10px"}}
					onClick={() => {
						clickHandler(id);
					}}
				>
				X
				</button>
			</li>
		)
	})
	
	return (
		<div className='users'>
			<h1>User Page</h1>

			<div className="user-select">
				<h3>User List</h3>
				<ul>
					{renderedUsers}
				</ul>
			</div>

	<AddUserForm refresh={refresh}/>
	
		</div>
	)
}

export default Users;
    