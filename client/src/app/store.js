import { configureStore } from '@reduxjs/toolkit'

import itemsReducer from '../features/items/itemsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        users: usersReducer
    }
})