import {createSlice} from '@reduxjs/toolkit'



 const Slices = createSlice({
    name:"Bookmark",
    initialState:[],
    reducers:{
        addtobookmark(state,action) {
                state.push(action.payload);    
        },
        removebookmark(state,action){
            return state.filter(item=>item.id!==action.payload.title)
        }

    }

})

export  const {addtobookmark,removebookmark} = Slices.actions;

export default Slices.reducer;
