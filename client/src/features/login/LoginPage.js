import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { authenticated } from './loginSlice'

function LoginPage() {
	const [userName, setUserName] = useState("")
	const [userId, setUserId] = useState(0)

	const history = useHistory()
	const dispatch = useDispatch()

	const users = useSelector(selectAllUsers)
	
	const onUserChosen = e => {
		const user = JSON.parse(e.target.value)
		setUserName(user.name)
		setUserId(Number(user.id))
	}

	const onLoginSubmit = async () => {
		if (userName && userId) {
			await dispatch(
				authenticated({
					id: userId,
					name: userName
				})
			).unwrap();
			history.push('/items')
		}
	}

	return (
		<div id="loginform">
			<h1>Login Page</h1>
			
			<h3>Please login!</h3>
			<select id="login" name="login" onChange={onUserChosen}>
				<option value="">- select user -</option>
				{users.map(user => <option key={user.id} value={JSON.stringify(user)}>{user.name}</option>)}
			</select>
			&nbsp;
			<button onClick={() => {onLoginSubmit()}}>Login</button>

		</div>
	)
}

export default LoginPage