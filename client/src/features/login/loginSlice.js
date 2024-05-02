import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			return action.payload
		},
		logout: (state, action) => {
			state.loggedInUser = ""
			state.userId = null
		}
	}
})


export const { loginSuccess, logout} = loginSlice.actions
export default loginSlice.reducer

export const selectLoggedInUser = state => state.login