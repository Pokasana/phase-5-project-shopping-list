import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const authenticated = createAsyncThunk(
  "login/authenticated",
  async (user) => {
    const response = await fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user, null, 2),
    });
    const data = await response.json();
    return data;
  }
);

export const checkAuth = createAsyncThunk("login/checkAuth", async () => {
  const response = await fetch("http://127.0.0.1:5555/checkSession");
  const data = await response.json();
  return data;
});

export const loggedOut = createAsyncThunk("login/loggedOut", async () => {
  const response = await fetch("http://127.0.0.1:5555/login", {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authenticated.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(loggedOut.fulfilled, (state, action) => {
      return { ...state, name: "", id: null };
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
  },
});

export default loginSlice.reducer;

export const selectLoggedInUser = (state) => state.login;
