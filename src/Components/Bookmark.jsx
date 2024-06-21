import React, { useState } from 'react'
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
  // const [bookmarkeddata,setBookmarkeddata] = useState([])
  // const storedData = sessionStorage.getItem('userData');

  // if (storedData) {
  //   // Parse JSON string back to JavaScript object
  //   const parsedData = JSON.parse(storedData);
  //   setBookmarkeddata(parsedData);
  // }

  return (
    <div className='h-full w-screen'>
      {/* {bookmarkState.length===0?  <Cards title={"Saved Bookmark"} Category={bookmarkeddata} addbookmark={handleremove} Bookmarked={bookmarkState} viewindividual={viewindividual} navigate={navigate}/>: */}
       <Cards title={"Saved Bookmark"} Category={bookmarkState} addbookmark={handleremove} Bookmarked={bookmarkState} viewindividual={viewindividual} navigate={navigate}/>
       {/* } */}
    </div>
  )
}

export default Bookmark
