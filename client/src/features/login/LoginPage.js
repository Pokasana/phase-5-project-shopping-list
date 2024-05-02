import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { loginSuccess, selectLoggedInUser } from './loginSlice'

function LoginPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(null)

	const [userName, setUserName] = useState("")
	const [userId, setUserId] = useState(0)

	const history = useHistory()
	const dispatch = useDispatch()
	
	const users = useSelector(selectAllUsers)
	const loggedInUser = useSelector(selectLoggedInUser)

	const onUserChosen = e => {
		const user = JSON.parse(e.target.value)
		setUserName(user.name)
		setUserId(Number(user.id))
	}

	// useEffect(() => {
	// 	if(loggedInUser.userId !== null) {
	// 		history.push('/items')
	// 	}
	// }, [loggedInUser])

	const onLoginSubmit = () => {
		if (userName && userId) {
			dispatch(
				loginSuccess({
					id: userId,
					name: userName
				})
			)
			history.push('/items')
		}
	}


	return (
		<div id="loginform">
			<h1>Login Page</h1>
			
			<h3>Please select a user</h3>
			<select id="login" name="login" onChange={onUserChosen}>
				<option value=""></option>
				{users.map(user => <option key={user.id} value={JSON.stringify(user)}>{user.name}</option>)}
			</select>
			&nbsp;
			<button onClick={onLoginSubmit}>Login</button>

		</div>

	)
}

export default LoginPage