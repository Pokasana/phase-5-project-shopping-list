import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("http://127.0.0.1:5555/items");
  const data = await response.json();
  return data;
});

export const addNewItem = createAsyncThunk(
  "items/addNewItem",
  async (values) => {
    const response = await fetch("http://127.0.0.1:5555/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  }
);

export const editItem = createAsyncThunk("items/editItem", async (values) => {
  const response = await fetch(`http://127.0.0.1:5555/items/${values.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
});

export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
  const response = await fetch(`http://127.0.0.1:5555/items/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewItem.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(editItem.fulfilled, (state, action) => {
      const updatedItem = action.payload;
      const index = state.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        const newState = [...state];
        newState[index] = updatedItem;
        return newState;
      }
      return state;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      return [...state].filter((item) => item.id !== action.payload.itemId);
    });
  },
});

export default itemsSlice.reducer;

export const selectAllItems = (state) => state.items;
export const selectItemById = (state, itemId) =>
  state.items.find((item) => item.id === itemId);
