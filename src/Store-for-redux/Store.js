import {  configureStore } from "@reduxjs/toolkit";
import Slices from "./Addtobookmark"


export const CartStore = configureStore({
    reducer:{
        Bookmark:Slices,
       
    }

});