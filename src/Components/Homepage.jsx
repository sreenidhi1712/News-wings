import React, { useEffect ,useState} from 'react'
import './Style.css'
import axios from 'axios';
import { FaBookmark } from "react-icons/fa";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import Cards from './Cards';


function Homepage() {
     
  const Bookmarked = useSelector(state=>state.Bookmark)
  const Dispatcher  = useDispatch();
  const navigate = useNavigate();
  const addbookmark = (items)=>{
    // sessionStorage.setItem('bookmarkedData', JSON.stringify(items));
    Dispatcher(addtobookmark(items))
  }
const viewindividual = (items)=>{
  Dispatcher(viewarticle(items))
}
//newsapi.org
  // const url = `https://newsapi.org/v2/everything?q=politics&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&pageSize=3&language=en&page=5`;
  // const latesturl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&pageSize=3&language=en&page=2`;
  // const headlineurl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&pageSize=3&language=en&page=3`;
//newsorg.io
  const url = `https://newsdata.io/api/1/latest?apikey=pub_46898b8ae28dc8cb31b1a1275d13b167dde4f&category=top&size=3&image=1&language=en`;
  const latesturl = `https://newsdata.io/api/1/latest?apikey=pub_4678059751b9b341ae3efcfcb16d41ffe79ec&q=covid&size=3&country=in&image=1&language=en`;
  const headlineurl = `https://newsdata.io/api/1/latest?apikey=pub_4700424948689e017859442de2ea3c50de67b&category=top&size=3&country=in&image=1&language=en`;
  const trending = [
        {image:"https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title:"Sports"
        },
        { image:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"politics"
        },
        { image:"https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"general"
        },
        { image:"https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Business"
        },
        {image:"https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Entertainment"
        }
]

    const [news, setNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
  const [headlines, setHeadlines] = useState([]);

  const fetchdata =  async (urls,setFunction)=>{
    try {
      const response = await axios.get(urls);
      setFunction(response.data.results);
    } catch (error) {
      console.log('Error fetching latest news:', error);
    }
  }

  useEffect(() => {

    fetchdata(latesturl,setLatestNews);
    fetchdata(headlineurl,setHeadlines);
    fetchdata(url,setNews)
   
  }, []);

   
  return (
    <div className='w-screen mb-10'>
{/* news cards  https://newsapi.org/v2/top-headlines?country=us&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb */}
           <div className='flex overflow-x-scroll hide-scrollbar w-full  mt-28 lap:overflow-x-hidden lap:flex-wrap lap:justify-evenly  '> 
               {news.map((items)=>(
                        <div key={items.title} className={`h-36 w-[85%] tab:w-[60%] lap:mt-5 lap:w-[40%] lap:h-60 lapl:w-[30%] tab:h-48 mx-3 flex flex-col justify-end flex-shrink-0 rounded-lg  bg-cover bg-center`} style={{ backgroundImage: `url(${items.image_url})` }}>
                                <div className='mb-2'>
                                <p className='font-bold text-sm text-white  ml-3'>{items.title}</p>
                                </div>
                                 <div className='flex w-full h-[25%]  justify-between'>
                                  <button onClick={()=>
                                    {
                                      viewindividual(items);
                                      navigate(`/individual/${items.title}`)
                                      }} className='h-[80%] w-[30%] rounded-md text-amber-50 ml-3 bg-green-500' >View More</button>
                                 <FaBookmark className={`${Bookmarked.some((bookmarkedItem) => bookmarkedItem.title === items.title)?`text-red-600`:`text-gray-500`} mr-2 mt-1 h-5 w-5`} onClick={()=>addbookmark(items)} />
                                  </div>

                        </div>
                     )
               )}
           </div>


           <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>Trending Topic</p>
               <div className={`flex overflow-x-scroll hide-scrollbar w-full lap:overflow-hidden lap:flex-wrap lap:justify-evenly`} >
               {trending.map((items)=>(
                        <div key={items.title} onClick={()=>navigate(`/category/${items.title}`)}  className={`h-32 w-[40%] lapl:w-[20%] tab:h-40 mt-5 mx-3 flex-shrink-0  bg-slate-200  rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${items.image})` }}>
                                 <p className='text-white font-bold mt-3 ml-3'>{items.title}</p>
                                
                        </div>
                     )
               )}
               </div>
           </div>

           <Cards title={"Headlines"} Category={headlines} addbookmark={addbookmark} Bookmarked={Bookmarked} viewindividual={viewindividual} navigate={navigate} />

           <Cards title={"Latest News"} Category={latestNews} addbookmark={addbookmark} Bookmarked={Bookmarked} viewindividual={viewindividual} navigate={navigate} />
          


    </div>
  )
}

export default Homepage



