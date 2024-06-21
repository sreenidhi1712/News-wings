import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import Cards from './Cards';


function Individual() {

  const Bookmarked = useSelector(state=>state.Bookmark)
  const Dispatcher  = useDispatch();
  const navigate = useNavigate();
  const addbookmark = (items)=>{
    Dispatcher(addtobookmark(items))
  }
const viewindividual = (items)=>{
  Dispatcher(viewarticle(items))
}
     const Indiviarticle = useSelector(state=>state.Article)
    // const navigate = useNavigate();
    const [latestNews, setLatestNews] = useState([]);
    const [related,setRelated] = useState('')
   
    const fetchrelated = ()=>{
      // Indiviarticle.map((items)=>{setRelated(items.title)})
      setRelated('general')
    }
     // const {ArticleId} = useParams();
    const url = `https://newsdata.io/api/1/latest?apikey=pub_46898b8ae28dc8cb31b1a1275d13b167dde4f&category=${related}`;

    useEffect(()=>{
        const fetchrelatedNews = async () => {
          fetchrelated();
          try {
            const response = await axios.get(url);
            setLatestNews(response.data.results);
          } catch (error) {
            console.error('Error fetching latest news:', error);
          }
          };
          fetchrelatedNews();
         
         

    },[])

  return (
    <>
   
    {Indiviarticle.map((item)=>(
<div className='h-screen w-screen flex flex-col items-center overflow-x-hidden mb-14' key={item.title}>
    <div className='h-14 w-full flex items-center  justify-center bg-slate-400'>
     
        <p className='py-5 font-bold text-white '>News Details</p>
    </div>
            <div className=' '>
                    <p className='font-bold mx-3'>{item.title}</p>
            </div>
            <div className=' w-[90%] h-[20%] mt-3'>
                <img className='h-full w-full object-cover object-center' src={item.image_url}/>

            </div>
            <div className='w-[98%] mt-5'>
                            <p className='text-justify mb-2'>{item.description}.</p>
                       
            </div>
    </div>
    ))}
          
          <Cards title={"Related News"} Category={latestNews} addbookmark={addbookmark} Bookmarked={Bookmarked} viewindividual={viewindividual} navigate={navigate} />

     </>
  )
}

export default Individual



