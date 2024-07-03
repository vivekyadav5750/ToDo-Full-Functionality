import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemAPI,
  editItemAPI,
  deleteItemAPI,
  fetchItemsAPI,
  toggleItemAPI,
} from "../../hooks/ToDoAPI";

export const fetchItems = createAsyncThunk("todo/fetchItems", async () => {
  const items = await fetchItemsAPI();
  return items;
});

export const addItem = createAsyncThunk("todo/addItem", async (item) => {
  const newTodo = await addItemAPI(item);
  return newTodo;
});

export const editItem = createAsyncThunk(
  "todo/editItem",
  async ({ id, updates }) => {
    await editItemAPI(id, updates);
    return { id, updates };
  }
);

export const deleteItem = createAsyncThunk("todo/deleteItem", async (id) => {
  await deleteItemAPI(id);
  return id;
});

export const toggleTodo = createAsyncThunk("todo/toggleTodo", async (id) => {
  await toggleItemAPI(id);
  return id;
});

const toDoReducer = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {},
});

export const todoReducer = toDoReducer.reducer;
export const todosSelector = (state) => state.todo;
