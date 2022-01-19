import React from 'react'
import './Text.css'

export default function Text(props) {
    
   
    return (
        <li className="listitem"><a href="/" className={props.txtcls}>{props.text}</a></li>
    )
}
