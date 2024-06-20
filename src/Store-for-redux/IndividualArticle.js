import {createSlice} from '@reduxjs/toolkit'



 const ArticleIndividual = createSlice({
    name:"ArticleIndividual",
    initialState:[],
    reducers:{
        viewarticle(state,action) {
            let index = state.findIndex(item => item.title === action.payload.title);
            if (index === -1) {
                state.push(action.payload);
              } else {
                state.splice(index, 1);
              }
                  
        },
       

    }

})

export  const {viewarticle} = ArticleIndividual.actions;

export default ArticleIndividual.reducer;
