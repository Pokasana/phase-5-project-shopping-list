import React from "react";
import AddUserForm from "./AddUserForm"

import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, deleteUser } from './usersSlice'

function Users({ clickHandler, refresh }) {
	const dispatch = useDispatch()

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
						dispatch(deleteUser(id));
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
    