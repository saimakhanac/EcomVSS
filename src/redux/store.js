import { configureStore } from "@reduxjs/toolkit";
import caertSlice from './cartSlice'
export const store = configureStore({
    reducer:{
        cart: caertSlice,

    },
    devTools:true
})