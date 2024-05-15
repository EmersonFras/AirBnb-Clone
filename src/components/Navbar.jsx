import React from "react"
import logo from "/assets/AirbnbLogo.png"

export default function Navbar() {
    return (
        <div id ="navbar">
            <img className ="bnbLogo" src = {logo} alt = "Airbnb Logo"/>
        </div>
    )
}