
import './App.css'
import Home from './assets/Home/Home'
import Courses from './assets/Courses/Courses'
import Today from './assets/Today/Today'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses/>}/>
          <Route path='/Today' element={<Today/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
