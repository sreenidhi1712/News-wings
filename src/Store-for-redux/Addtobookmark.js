import {createSlice} from '@reduxjs/toolkit'



 const Slices = createSlice({
    name:"Bookmark",
    initialState:[],
    reducers:{
        addtobookmark(state,action) {
            let index = state.findIndex(item => item.title === action.payload.title);
            if (index === -1) {
                state.push(action.payload);
              } else {
                state.splice(index, 1);
              }
                  
        },
       

    }

})

export  const {addtobookmark} = Slices.actions;

export default Slices.reducer;
