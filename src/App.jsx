import React from 'react'
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Contacting from './components/Contacting'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
function App() {
  

  return (
     <Router>
        <Nav />
        <Routes>
            
            <Route path='/' element={<Home />}> </Route>
             <Route path='/About' element={<About/>}></Route>
            <Route path='/Menu' element={<Menu /> }></Route>
        <Route path='/Contacting' element={<Contacting />}></Route>
           <Route path='/Gallery' element={<Gallery />}></Route>

           
        </Routes>
        <Footer />
     </Router>
  )
}

export default App
