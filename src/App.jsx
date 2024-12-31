import {BrowserRouter,Routes,Route}  from 'react-router-dom' 
import Navbar from './components/Navbar.jsx'
import './App.css'
import Register from './components/Register.jsx'
import About from './components/About.jsx'
import Fund from './components/Fund.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'



function App() {
  

  return (
   <div> 
    <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About college='KEC' name="Neighborhood Heroes" />} />
          <Route path="/fund" element = {<Fund/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
       
  
  )
}

export default App
