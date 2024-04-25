import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default itemsSlice.reducer