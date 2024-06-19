import './App.css'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from './Components/Maincontent';
import Individual from './Components/Individual';

function App() {
  

  return (
    <BrowserRouter>
 
         <Routes>
             <Route path='/' element={<Maincontent/>}/>
             <Route path='/individual' element={<Individual/>}/>
         </Routes>
         <Footer/>
    
   
    </BrowserRouter>
  )
}

export default App
