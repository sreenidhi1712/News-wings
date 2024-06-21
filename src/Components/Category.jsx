import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import axios from 'axios';
import Cards from './Cards';

function Category() {
    const {categoryName} = useParams();
    const url = `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=d3952cc9efb9478ebe65bb150ffe954c&pageSize=10&language=en&page=1`
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
    

    useEffect(()=>{
        const fetchcategory = async () => {
            try {
              const response = await axios.get(url);
              setNews(response.data.articles);
            } catch (error) {
              console.log('Error fetching latest news:', error);
            }
          };
          fetchcategory();
    },[])
  return (
    <div>
         <Cards title={"Headlines"} Category={news} addbookmark={addbookmark} Bookmarked={Bookmarked} viewindividual={viewindividual} navigate={navigate} />
    </div>
  )
}

export default Category


