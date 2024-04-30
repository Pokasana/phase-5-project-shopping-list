import React from "react";
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import { Provider, useDispatch } from "react-redux"

import { store } from './app/store'
import { fetchUsers } from './features/users/usersSlice'
import { fetchShops } from './features/shops/shopsSlice'
import App from "./App";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(fetchUsers())
store.dispatch(fetchShops())

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
