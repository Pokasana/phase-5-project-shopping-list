import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch('http://127.0.0.1:5555/users')
	const data = await response.json()
	return data
})

export const addNewUser = createAsyncThunk(
	'users/addNewUsers',
	async (values) => {
		const response = await fetch("http://127.0.0.1:5555/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values.user, null, 2)
		})
		const data = await response.json()
		return data
	}
)

export const deleteUser = createAsyncThunk(
	'users/deleteUser',
	async (id) => {
		const response = await fetch(`http://127.0.0.1:5555/users/${id}`, {
			method: "DELETE",
		})
		const data = await response.json()
		return data
	}
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(addNewUser.fulfilled, (state, action) => {
			return state.concat(action.payload)
		})
		builder.addCase(deleteUser.fulfilled, (state, action) => {
			return state.filter(user => user.id !== action.payload.userId)
		})
	}
})

export default usersSlice.reducer

export const selectAllUsers = state => state.users
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)