import {  configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"


export const CartStore = configureStore({
    reducer:{
        cart:CartReducer,
       
    }

});