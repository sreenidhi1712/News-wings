import React, { useEffect, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import axios from 'axios';

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


const Cards = ({title,Category,addbookmark,Bookmarked,viewindividual,navigate})=>{
    return <>
     {/* headlines */} 
    <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>{title}</p>
               <div className={`flex flex-col w-full items-center `} >
               {Category.map((items)=>(
                        <div key={items.title} className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg flex `} >
                                 <div className='h-[100%] w-[35%]  '>
                                           <img src={items.urlToImage} className='h-full w-full object-contain '/>
                                 </div>
                                 <div className='h-full w-[65%] '>
                                  <p>{items.title}</p>
                                  <button onClick={()=>
                                    {
                                      viewindividual(items);
                                      navigate(`/individual/${items.title}`)
                                      console.log(items.title)
                                      }}>View More</button>
                                 <FaBookmark className={`${Bookmarked.some((bookmarkedItem) => bookmarkedItem.title === items.title)?`text-red-600`:`text-white`}`} onClick={()=>addbookmark(items)} />
                                 </div>
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}
