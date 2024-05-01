import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchShops = createAsyncThunk('users/fetchShops', async () => {
	const response = await fetch('http://127.0.0.1:5555/shops')
	const data = await response.json()
	return data
})

export const addNewShop = createAsyncThunk(
	'shops/addNewShops',
	async (values) => {
		const response = await fetch("http://127.0.0.1:5555/shops", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values.shop, null, 2)
		})
		const data = await response.json()
		return data
	}
)

export const deleteShop = createAsyncThunk(
	'shops/deleteShop',
	async (id) => {
		const response = await fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		const data = await response.json()
		return data
	}
)

const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchShops.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(addNewShop.fulfilled, (state, action) => {
			return state.concat(action.payload)
		})
		builder.addCase(deleteShop.fulfilled, (state, action) => {
			return state.filter(shop => shop.id !== action.payload.shopId)
		})
	}
})

export default shopsSlice.reducer

export const selectAllShops = state => state.shops
export const selectShopById = (state, shopId) => state.shops.find(shop => shop.id === shopId)