
import './App.css'
import Home from './Components/Home'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Register from './Components/Register'



function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>

   </Routes>

    </>
  )
}

export default App
