import React, { useContext} from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <nav className={`bg-green-400 w-screen  fixed top-0 left-0  z-10  flex flex-col overflow-x-hidden`}>
            
            <div className="flex justify-center items-center h-[50%] mt-3 w-[100%]">
               
                <h1 className='text-white text-lg font-bold text-center ml-0 tab:text-xl lap:text-2xl lapl:text-3xl'>News Wing</h1>
              
            </div>

            <div className="h-[50%] mt-5 overflow-x-scroll hide-scrollbar mb-2"> {/* Component for  category options*/}
                <ul className="flex justify-around gap-4 items-center text-white">
                    <li className="font-bold text-sm ml-1 tab:text-base lap:text-lg" onClick={()=>navigate('/category/general')}>Latest</li>
                    <li className="font-bold text-sm tab:text-base lap:text-lg" onClick={()=>navigate('/category/Business')}>Business</li>
                    <li className="font-bold text-sm tab:text-base lap:text-lg" onClick={()=>navigate('/category/Tech')}>Tech</li>
                    <li className="font-bold text-sm tab:text-base lap:text-lg" onClick={()=>navigate('/category/Entertainment')}>Entertainment</li>
                    <li className="font-bold text-sm tab:text-base lap:text-lg" onClick={()=>navigate('/category/Health')}>Health</li>
                    <li className="font-bold text-sm tab:text-base lap:text-lg" onClick={()=>navigate('/category/Science')}>Science</li>
                    <li className="font-bold text-sm  mr-3 tab:text-base lap:text-lg" onClick={()=>navigate('/category/Sports')}>Sports</li>
                </ul>
            </div>
            
      
    </nav>
    </>
  );
};

export default Navbar;
