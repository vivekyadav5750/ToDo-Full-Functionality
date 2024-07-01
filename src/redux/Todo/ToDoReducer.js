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
  await toggleItemAPI(id, { completed: true });
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
      .addCase(addItem.fulfilled, (state, action) => {
        console.log("Hello this is item: ", state.todos);
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const { id, updates } = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
          Object.assign(existingItem, updates);
        }
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        const updatedItems = state.todos.filter((item) => {
          console.log("Yahan dekho: ", item.id, "Data:", item.title);
          return item.id !== action.payload;
        });

        console.log("Hello this is item agian: ", state.todos);

        return {
          ...state,
          todos: [...updatedItems],
        };
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const existingItem = state.todos.find(
          (item) => item.id === action.payload
        );
        if (existingItem) {
          existingItem.completed = !existingItem.completed;
        }
        console.log(existingItem);
      });
  },
});

export const todoReducer = toDoReducer.reducer;
export const todosSelector = (state) => state.todo;
