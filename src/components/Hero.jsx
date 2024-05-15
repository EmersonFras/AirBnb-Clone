import React from "react"
import HeroGrid from "/assets/HeroGrid.png"

export default function Hero() {
    return (
        <div id = "hero">
            <img className = "heroImg" src = {HeroGrid} alt ="Images of different activities"/>
            <h1 className="title">Online Experiences</h1>
            <p className="subText">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}