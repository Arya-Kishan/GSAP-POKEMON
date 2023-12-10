import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import load from './assets/load.svg'
const Detail = React.lazy(() => import('./Pages/Detail/Detail'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div><img id='loading' src={load} alt="" /></div>} >
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/detail/:name' element={<Detail/>} />
        </Routes>
      </Suspense>
    </div>
  )
}
