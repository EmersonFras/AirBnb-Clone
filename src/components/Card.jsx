import React from "react"
import Star from "../assets/Star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div id = "Card">
            <img className="card--preview" src = {props.img}/>
            <div className = "card--info">
                <img className="card--star" src = {Star} alt = "Star icon" />
                <p className="card--rate">{props.rating}</p>
                <p className="card--review">({props.reviewCount})</p>
                <p className="card--location">•{props.country}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / person</p>

        </div>
    )
}