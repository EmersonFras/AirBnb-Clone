import React from "react"
import Star from "/assets/Star.png"


export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div id = "Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--preview" src = {`/assets/${props.coverImg}`}/>
            <div className = "card--info">
                <img className="card--star" src = {Star} alt = "Star icon" />
                <p className="card--rate">{props.stats.rating}</p>
                <p className="card--review">({props.stats.reviewCount})</p>
                <p className="card--location">•{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong> / person</p>

        </div>
    )
}