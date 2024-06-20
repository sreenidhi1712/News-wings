import './App.css'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from './Components/Maincontent';
import Individual from './Components/Individual';
import { BookmarkStore } from './Store-for-redux/Store';
import Bookmark from './Components/Bookmark';
import { Provider } from 'react-redux';

function App() {
  

  return (

    
    <BrowserRouter>
        <Provider store={BookmarkStore}>
         <Routes>
             <Route path='/' element={<Maincontent/>}/>
             <Route path='/:articleid' element={<Individual/>}/>
             <Route path='/bookmark' element={<Bookmark/>}/>
         </Routes>
         <Footer/>
         </Provider>
   
    </BrowserRouter>
  )
}

export default App
