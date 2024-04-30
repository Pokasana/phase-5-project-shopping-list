import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch('http://127.0.0.1:5555/users')
	const data = await response.json()
	console.log(data)
	return data
})

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload
		})
	}
})

export default usersSlice.reducer

export const selectAllUsers = state => state.users


export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)