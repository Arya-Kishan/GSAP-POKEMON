import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import Horizontal from '../Horizontal/Horizontal'
import Gallery from '../Gallery/Gallery'
import Pokemon from '../Pokemon/Pokemon'
import Footer from '../Footer/Footer'

export default function Homepage() {
    return (
        <div>
            <Banner />
            <Card />
            <Pokemon />
            <Horizontal />
            <Gallery />
            <Footer/>
        </div>
    )
}
