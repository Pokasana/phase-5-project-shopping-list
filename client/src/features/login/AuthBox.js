import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loggedOut, selectLoggedInUser } from '../login/loginSlice'



function AuthBox() {
	const dispatch = useDispatch()
	const history = useHistory()

	const user = useSelector(selectLoggedInUser)

	const onLogout = () => {
		dispatch(loggedOut)
		history.push('/login')
	}
		
	return (
		<div id="auth_box">
			<h3>Hello, {user.name}!</h3>

			{console.group(user.name)}
			<button id="logout" onClick={onLogout}>Logout</button>
		</div>
	)
}

export default AuthBox