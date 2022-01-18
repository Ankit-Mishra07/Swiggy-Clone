import React from 'react'
import './Card.css'
export default function Card(props) {
    return (
        <div className="feature">
            <img src={props.src} alt=""/>
            <h2>{props.h2}</h2>
            <p>{props.para1}<br/>{props.para2}</p>
            
        </div>
    )
}
