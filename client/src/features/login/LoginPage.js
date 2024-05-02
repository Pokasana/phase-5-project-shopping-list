import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectAllUsers } from '../users/usersSlice'
import { checkAuth, authenticated } from './loginSlice'

function LoginPage() {
	const [userName, setUserName] = useState("")
	const [userId, setUserId] = useState(0)

	const history = useHistory()
	const dispatch = useDispatch()

	const users = useSelector(selectAllUsers)
	
	useEffect(() => {
		dispatch(checkAuth)
		dispatch(fetchUsers())
	}, [dispatch])

	const onUserChosen = e => {
		const user = JSON.parse(e.target.value)
		setUserName(user.name)
		setUserId(Number(user.id))
	}

	const onLoginSubmit = () => {
		if (userName && userId) {
			dispatch(
				authenticated({
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
			
			<h3>Please login!</h3>
			<select id="login" name="login" onChange={onUserChosen}>
				<option value="">- select user -</option>
				{users.map(user => <option key={user.id} value={JSON.stringify(user)}>{user.name}</option>)}
			</select>
			&nbsp;
			<button onClick={onLoginSubmit}>Login</button>

		</div>

	)
}

export default LoginPage