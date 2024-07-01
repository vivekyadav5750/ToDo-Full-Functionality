import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemAPI,
  editItemAPI,
  deleteItemAPI,
  fetchItemsAPI,
  toggleItemAPI,
} from "./ToDoAPI";

export const fetchItems = createAsyncThunk("todo/fetchItems", async () => {
  const items = await fetchItemsAPI();
  return items;
});

export const addItem = createAsyncThunk("todo/addItem", async (item) => {
  const newTodo = await addItemAPI(item);
  return newTodo;
});

export const editItem = createAsyncThunk( "todo/editItem", async ({ id, updates }) => {
  // console.log("editItem : ", id, updates);
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
  extraReducers: (builder) => {
    builder
      // Fetch Items
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.todos = [...action.payload];
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
      })
      //ADD Item
      .addCase(addItem.fulfilled, (state, action) => {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      })
      //EDIT Item
      .addCase(editItem.fulfilled, (state, action) => {
        // const { id, updates } = action.payload;
        // const existingItem = state.todos.find((item) => item.id === id);
        // if (existingItem) {
        //   Object.assign(existingItem, updates);
        // }
        state.todos = state.todos.map(item => item.id === action.payload.id ? { ...item, ...action.payload.updates } : item);


      })
      //DELETE Item
      .addCase(deleteItem.fulfilled, (state, action) => {
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload),
        };
      })
      //TOGGLE Item
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const existingItem = state.todos.find(
          (item) => item.id === action.payload
        );
        if (existingItem) {
          existingItem.completed = !existingItem.completed;
        }
      });
  },
});

export const todoReducer = toDoReducer.reducer;
export const todosSelector = (state) => state.todo;
