import { createSlice } from '@reduxjs/toolkit'

const initialState = { loggedInUser: "", userId: null }

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login: (state, action) => {
			state.loggedInUser = action.payload.name
			state.userId = action.payload.id
		},
		logout: (state, action) => {
			state.loggedInUser = ""
			state.userId = null
		}
	}
})

export default loginSlice.reducer

export const selectLoggedInUser = state => state.login