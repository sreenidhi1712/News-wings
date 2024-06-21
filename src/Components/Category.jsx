import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import axios from 'axios';
import Cards from './Cards';

function Category() {

  const [page,setPage] = useState(0)
    const {categoryName} = useParams();
    const url = `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&pageSize=5&language=en&page=${page}`
    const [news,setNews] = useState([])
    const Bookmarked = useSelector(state=>state.Bookmark)
    const Dispatcher  = useDispatch();
    const navigate = useNavigate();
    const addbookmark = (items)=>{
        Dispatcher(addtobookmark(items))
      }
    const viewindividual = (items)=>{
      Dispatcher(viewarticle(items))
    }

  
    const [totalpages,setTotalpages] = useState(0) 
  
    
    const handlenext = ()=>{
      
      if(page +1 < totalpages){
       
        setPage(page+1);
      }
    }
  

    const handleprev = ()=>{
      if(page -1 <= 1){
        setPage(1)
      }else{
       
        setPage(page - 1 )
      } 
      
    }
 
    useEffect(()=>{
        const fetchcategory = async () => {
            try {
              const response = await axios.get(url);
               setTotalpages(Math.ceil((response.data.totalResults)/5));
              console.log(totalpages)
              setNews(response.data.articles);
            } catch (error) {
              console.log('Error fetching latest news:', error);
            }
          };
          fetchcategory();
    },[page])
  return (
    <div className='mb-10'>
         <Cards title={categoryName} Category={news} addbookmark={addbookmark} Bookmarked={Bookmarked} viewindividual={viewindividual} navigate={navigate} />
         <div className='flex mb-12 w-full justify-between'>
         <button className={`h-6 w-[30%]  rounded-md ml-2 bg-green-400 disabled:bg-lime-700`} disabled={page  <= 1} onClick={handleprev}>Prev Page</button>
          <button className={`h-6 w-[30%]  rounded-md mr-2 bg-green-400 disabled:bg-lime-700`}  disabled={page > totalpages} onClick={handlenext}>Next Page</button>
         </div>
    </div>
  )
}

export default Category


