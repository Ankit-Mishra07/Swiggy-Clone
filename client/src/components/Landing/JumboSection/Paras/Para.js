import React from 'react'
import '../Paras/Para.css'

export default function Para(props) {
    return (
        <div className="paradiv">
            <p className={props.cls}>{props.txt}</p>
        </div>
    )
}
