import React from 'react'
import './Image.css'

export default function Image(props) {
    return (
       <img src={props.src} className={props.imgcls} alt=""/>
    )
}
