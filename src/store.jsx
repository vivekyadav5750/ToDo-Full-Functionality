import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "./redux/Todo/ToDoReducer";
import { userReducer } from "./redux/User/UserReducer";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userReducer,
    },
});

export default store;