import {createSlice} from '@reduxjs/toolkit'



 const ArticleIndividual = createSlice({
    name:"ArticleIndividual",
    initialState:[],
    reducers:{
        viewarticle(state,action) {
            if(state.length >=1){
                state.pop()
            
            }
            state.push(action.payload)           
        },
       

    }

})

export  const {viewarticle} = ArticleIndividual.actions;

export default ArticleIndividual.reducer;
