import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
	const response = await fetch('http://127.0.0.1:5555/comments')
	const data = await response.json()
	return data
})

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchComments.fulfilled, (state, action) => {
			return action.payload
		})
	}
})

export default commentsSlice.reducer

export const selectAllComments = state => state.comments
export const selectCommentById = (state, commentId) => state.comments.find(comment => comment.id === commentId)