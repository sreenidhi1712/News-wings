import React, { useContext} from "react";
import { FaSearch } from "react-icons/fa";
import './Style.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <nav className={`bg-green-400 w-screen  fixed top-0 left-0  z-10  flex flex-col `}>
            
            <div className="flex justify-between items-center h-[50%] mt-3 w-full">
               
                <h1 className='text-white text-lg font-bold text-center ml-2'>News Wing</h1>
                <div className="flex w-[60%] h-8  rounded-lg items-center ">
                  <input type="text" placeholder="search here..." className="outline-none px-2 rounded-l-lg w-[80%] h-[100%] placeholder:px-3 placeholder:text-black"  />
                  <div className=" w-[20%]  text-white rounded-r-lg bg-cyan-500 h-8 flex items-center">
                  <FaSearch  className="h-5 w-5 ml-2 "/>
                  </div>
               
                </div>
                 {/* <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        placeholder="Search..."

      />
      <button
        className="absolute flex items-center justify-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        
      >
        <IoIosSearch className=""/>
      </button>
    </div> */}
               
            </div>

            <div className="h-[50%] mt-5 overflow-x-scroll hide-scrollbar mb-2"> {/* Component for  category options*/}
                <ul className="flex justify-around gap-4 items-center text-white">
                    <li className="font-bold text-sm ml-1" onClick={()=>navigate('/category/general')}>Latest</li>
                    <li className="font-bold text-sm" onClick={()=>navigate('/category/Business')}>Business</li>
                    <li className="font-bold text-sm" onClick={()=>navigate('/category/Tech')}>Tech</li>
                    <li className="font-bold text-sm" onClick={()=>navigate('/category/Entertainment')}>Entertainment</li>
                    <li className="font-bold text-sm" onClick={()=>navigate('/category/Health')}>Health</li>
                    <li className="font-bold text-sm" onClick={()=>navigate('/category/Science')}>Science</li>
                    <li className="font-bold text-sm  mr-3" onClick={()=>navigate('/category/Sports')}>Sports</li>
                </ul>
            </div>
            
      
    </nav>
    </>
  );
};

export default Navbar;
