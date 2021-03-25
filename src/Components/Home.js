import React from 'react'
import Navigation from "./Navigation"
import HomeInfo from "./HomeInfo"
import Features from './Features'
import Highlights from './Highlights'
import Banner from './Banner'
import Footer from './Footer'

function Home() {
    return (
        <div className="home-container">
            <Navigation/>
            <HomeInfo/>
            <Features/>
            <Highlights/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home
