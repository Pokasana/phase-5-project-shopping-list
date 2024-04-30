import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default commentsSlice.reducer