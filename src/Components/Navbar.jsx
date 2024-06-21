import React, { useContext} from "react";
import { CiMenuFries } from "react-icons/ci";
import './Style.css';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <nav className={`bg-green-400 w-screen  fixed top-0 left-0  z-10  flex flex-col `}>
            
            <div className="flex justify-between items-center h-[50%] mt-3">
                <CiMenuFries className="ml-2  h-5  w-5 text-white "/>
                <h1 className='text-white text-xl font-bold text-center mr-2'>News Wing</h1>
            </div>

            <div className="h-[50%] mt-5 overflow-x-scroll hide-scrollbar mb-2"> {/* Component for  category options*/}
                <ul className="flex justify-around gap-4 items-center text-white">
                    <li className="font-bold text-sm ml-1" onClick={()=>navigate('/category/Latest')}>Latest</li>
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
