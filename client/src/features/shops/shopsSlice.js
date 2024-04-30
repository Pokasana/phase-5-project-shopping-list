import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchShops = createAsyncThunk('users/fetchShops', async () => {
	const response = await fetch('http://127.0.0.1:5555/shops')
	const data = await response.json()
	return data
})

const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchShops.fulfilled, (state, action) => {
			return action.payload
		})
	}
})

export default shopsSlice.reducer

export const selectAllShops = state => state.shops


export const selectShopById = (state, shopId) => state.shops.find(shop => shop.id === shopId)