import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.jsx"
import "./styles/index.css"
import "./styles/navbar.css"
import "./styles/hero.css"
import "./styles/card.css"

export default function App() {
    const cards = data.map(card => <Card 
                                    key={card.id}
                                    {...card}
                                    />)
    return (
        <div id="page">
            <Navbar />
            <Hero />
            <div id="CardList">
                {cards}
            </div>
        </div>
    )
}
