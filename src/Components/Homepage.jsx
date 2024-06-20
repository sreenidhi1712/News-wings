import React, { useEffect ,useState} from 'react'
import './Style.css'
import axios from 'axios';
import { FaBookmark } from "react-icons/fa";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch ,useSelector} from 'react-redux';


function Homepage() {
     
  const Bookmarked = useSelector(state=>state.Bookmark)
  const Dispatch  = useDispatch();

  const addbookmark = (items)=>{
    Dispatch(addtobookmark(items))
  }

    const trending = [
        {image:"https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title:"Sports"
        },
        { image:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"travel"
        },
        { image:"https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Lifestyle"
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

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_4678059751b9b341ae3efcfcb16d41ffe79ec&country=in&size=3&image=1`);
        setLatestNews(response.data.results);
      } catch (error) {
        console.error('Error fetching latest news:', error);
      }
    };

    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_4678059751b9b341ae3efcfcb16d41ffe79ec&country=in&size=3&image=1&q=bengaluru`);
        setHeadlines(response.data.results);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };

    const fetchdata = async ()=>{
        try{
            const response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_4678059751b9b341ae3efcfcb16d41ffe79ec&country=in&category=top&size=3&image=1')
            setNews(response.data.results)
        }catch(error){
            console.error('Error fetching headlines:', error);
        }
       
    }
    fetchdata();
    fetchLatestNews();
    fetchHeadlines();
  }, []);

   
  return (
    <div className='w-screen mb-10'>
{/* news cards  https://newsapi.org/v2/top-headlines?country=us&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb */}
           <div className='flex overflow-x-scroll hide-scrollbar w-full  mt-28   '> 
               {news.map((items)=>(
                        <div key={items.title} className={`h-36 w-[85%] mx-3 flex items-end flex-shrink-0 rounded-lg  bg-cover bg-center`} style={{ backgroundImage: `url(${items.image_url})` }}>
                                 <p className='font-bold text-sm text-white  ml-3'>{items.title}</p>
                                 <FaBookmark  className={`${Bookmarked.some((bookmarkedItem) => bookmarkedItem.title === items.title)?`text-red-600 `:`text-white`} h-6 w-6`} onClick={()=>addbookmark(items)} />
                        </div>
                     )
               )}
           </div>


           <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>Trending Topic</p>
               <div className={`flex overflow-x-scroll hide-scrollbar w-full `} >
               {trending.map((items)=>(
                        <div key={items.title} className={`h-32 w-[40%] mt-5 mx-3 flex-shrink-0  bg-slate-200  rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${items.image})` }}>
                                 <p className='text-white font-bold mt-3 ml-3'>{items.title}</p>
                                
                        </div>
                     )
               )}
               </div>
           </div>

           <Cards title={"Headlines"} Category={headlines} addbookmark={addbookmark} Bookmarked={Bookmarked}/>

           <Cards title={"Latest News"} Category={latestNews} addbookmark={addbookmark} Bookmarked={Bookmarked}/>
          


    </div>
  )
}

export default Homepage



const Cards = ({title,Category,addbookmark,Bookmarked})=>{
    return <>
     {/* headlines */} 
    <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>{title}</p>
               <div className={`flex flex-col w-full items-center `} >
               {Category.map((items)=>(
                        <div key={items.title} className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg flex `} >
                                 <div className='h-[100%] w-[35%]  '>
                                           <img src={items.image_url} className='h-full w-full object-contain '/>
                                 </div>
                                 <div className='h-full w-[65%] '>
                                  <p>{items.title}</p>
                                 <FaBookmark className={`${Bookmarked.some((bookmarkedItem) => bookmarkedItem.title === items.title)?`text-red-600`:`text-white`}`} onClick={()=>addbookmark(items)} />
                                 </div>
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}

