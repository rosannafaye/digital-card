import React from "react"
import Banner from "./components/Img"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <div className= "card-container">
                <div className="banner-img">
                    <Banner />
                </div>
                
                <div className= "info">
                    <Info />
                </div>
                
                <div>
                    <About />
                </div>
                
                <Footer />
            </div>
        </div>
    )
}