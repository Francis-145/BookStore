import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Premium from './premium/Premium'
import Error from './components/Error'
import Signup from './components/Signup'
const App = () => {
  return (
    <>
    
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/premium' element={<Premium/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </div>
    </>
  )
}

export default App;
