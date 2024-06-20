import {createSlice} from '@reduxjs/toolkit'



 const ArticleIndividual = createSlice({
    name:"ArticleIndividual",
    initialState:null,
    reducers:{
        viewarticle(state,action) {
           return action.payload
                  
        },
       

    }

})

export  const {viewarticle} = ArticleIndividual.actions;

export default ArticleIndividual.reducer;
