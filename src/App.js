import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import FeatureSection from "./FeatureSection";
const App=()=>(
        <div>
            <Navbar/>
            <HeroSection/>
            <FeatureSection/>
            <CardSection/>
            <Footer/>
        </div>
)
export default App;