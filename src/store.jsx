import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./redux/Todo/ToDoReducer";
import { userReducer } from "./redux/User/UserReducer";

const store = configureStore({
    reducer: {
        TOGGLE_TODO: toDoReducer,
        user: userReducer,
    },
});

export default store;