import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Katie from "./assets/Katie.png"
import Wedding from "./assets/wedding.png"
import Bike from "./assets/bike.png"
import "./styles/index.css"
import "./styles/navbar.css"
import "./styles/hero.css"
import "./styles/card.css"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div id="page">
            <Navbar />
            <Hero />
            <div id="CardList">
                <Card img={Katie} rating={5.0} reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} />
                <Card img={Wedding} rating={5.0} reviewCount={30} country="USA" title="Learn wedding photography" price={125} />
                <Card img={Bike} rating={4.8} reviewCount={2} country="USA" title="Group Mountain Biking" price={50} />
            </div>
        </div>
    )
}
