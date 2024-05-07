import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./styles/index.css"
import "./styles/navbar.css"
import "./styles/hero.css"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div id="page">
            <Navbar />
            <Hero />
        </div>
    )
}
