import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useNavigate } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import Cards from './Cards';


function Bookmark() {

    const bookmarkState = useSelector(state => state.Bookmark); 
   const Dispatch = useDispatch();
   const navigate = useNavigate();
   const handleremove= (items)=>{
    Dispatch(addtobookmark(items))
   }
   const viewindividual = (items)=>{
    Dispatch(viewarticle(items))
  }
  return (
    <div className='h-full w-screen'>
       <Cards title={"Saved Bookmark"} Category={bookmarkState} addbookmark={handleremove} Bookmarked={bookmarkState} viewindividual={viewindividual} navigate={navigate}/>
    </div>
  )
}

export default Bookmark
