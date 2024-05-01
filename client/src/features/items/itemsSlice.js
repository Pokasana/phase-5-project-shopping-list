import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchItems =  createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch('http://127.0.0.1:5555/items')
	const data = await response.json()
	return data
})

export const addNewItem = createAsyncThunk('items/addItem', async (values) => {
	const response = await fetch('http://127.0.0.1:5555/items', {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(values)
	})
	const data = await response.json()
	return data
})

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			return action.payload
		})
	}
})

export default itemsSlice.reducer

export const selectAllItems = state => state.items
export const selectItemById = (state, itemId) => state.items.find(item => item.id === itemId)