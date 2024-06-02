import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "../features/items/itemsSlice";
import usersReducer from "../features/users/usersSlice";
import shopsReducer from "../features/shops/shopsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer,
    shops: shopsReducer,
    comments: commentsReducer,
    login: loginReducer,
  },
});
