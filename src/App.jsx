import React from 'react'
import './App.css'
import Banner from './Pages/Banner/Banner'
import Card from './Pages/Card/Card'
import Horizontal from './Pages/Horizontal/Horizontal'
import Gallery from './Pages/Gallery/Gallery'

export default function App() {
  return (
    <div>
      <Banner/>
      <Card/>
      <Horizontal/>
      <Gallery/>
    </div>
  )
}
