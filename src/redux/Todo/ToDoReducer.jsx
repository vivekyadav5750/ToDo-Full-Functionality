import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  todos: [],
  length: 0,
  searchText: "",
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("fetchTodos", async (thunkAPI) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = [];
    let l = 0;
    querySnapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
      l = l + 1;
    });
    return { l, todos };
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const todoSlice = createSlice({
  name: "TOGGLE_TODO",
  initialState: initialState,
  reducers: {
    // fetch data
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.length = state.length + 1;
      state.todos = [...state.todos, { id: state.length, ...action.payload }];
    },
    deleteTodo: (state, action) => {
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    changeStatus: (state, action) => {
      // use id for database update or delete operation
      // const index = state.todos.findIndex((todo) => todo.id === action.payload);

      // use index for loacl state/ store
      state.todos = state.todos.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
      state.length = action.payload.l;
    //   console.log(state.todos);
    //   console.log(state.length);
    });
  },
});

export const toDoReducer = todoSlice.reducer;
// export const { addTodo, deleteTodo, setSearchText } = todoSlice.actions;
export const todosSelector = (state) => state.TOGGLE_TODO;
