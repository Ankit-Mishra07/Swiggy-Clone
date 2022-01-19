import React from 'react'
import '../Button/Button.css'

export default function Button(props) {
    return (
        <button className={props.btncls}>{props.btntext}</button>
    )
}
