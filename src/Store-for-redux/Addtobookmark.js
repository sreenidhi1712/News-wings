import {createSlice} from '@reduxjs/toolkit'



 const Slices = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addtobookmark(state,action) {
            let find = state.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                state[find].rating.quantity+=1;
            
            }
            else{
                state.push(action.payload);
            }
               
        },
        removebookmark(state,action){
            return state.filter(item=>item.id!==action.payload.id)
        }

    }

})

export  const {addtobookmark,removebookmark} = CartSlice.actions;

export default Slices.reducer;
