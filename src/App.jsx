import './App.css'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from './Components/Maincontent';
import Individual from './Components/Individual';
import {Provider} from 'react-redux'
import { CartStore } from './Store-for-redux/Store';

function App() {
  

  return (

    
    <BrowserRouter>
        <Provider store={CartStore}>
         <Routes>
             <Route path='/' element={<Maincontent/>}/>
             <Route path='/individual' element={<Individual/>}/>
         </Routes>
         <Footer/>
         </Provider>
   
    </BrowserRouter>
  )
}

export default App
