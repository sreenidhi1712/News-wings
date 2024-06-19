import {  configureStore } from "@reduxjs/toolkit";
import Slices from "./Addtobookmark"


export const BookmarkStore = configureStore({
    reducer:{
        Bookmark:Slices,
       
    }

});