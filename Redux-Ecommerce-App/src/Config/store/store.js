
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducer/cartSlice"

export default configureStore({
    reducer:{
        cart: CartReducer
    },
})

