import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/todoSlice"


export const store = configureStore({
    reducer:(
    {
       todos: todoReducer,
    }
)
})
