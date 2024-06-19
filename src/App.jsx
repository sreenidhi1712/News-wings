import './App.css'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from './Components/Maincontent';
import Individual from './Components/Individual';
import {Provider} from 'react-redux'
import { BookmarkStore } from './Store-for-redux/Store';
import Bookmark from './Components/Bookmark';

function App() {
  

  return (

    
    <BrowserRouter>
        <Provider store={BookmarkStore}>
         <Routes>
             <Route path='/' element={<Maincontent/>}/>
             <Route path='/individual' element={<Individual/>}/>
             <Route path='/bookmark' element={<Bookmark/>}/>
         </Routes>
         <Footer/>
         </Provider>
   
    </BrowserRouter>
  )
}

export default App
