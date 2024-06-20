import {  configureStore } from "@reduxjs/toolkit";
import Slices from "./Addtobookmark"
import IndividualArticle from "./IndividualArticle";


export const BookmarkStore = configureStore({
    reducer:{
        Bookmark:Slices,
        Article:IndividualArticle,
       
    }

});