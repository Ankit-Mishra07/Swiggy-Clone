import React from 'react'
import Content from './Content/Content'
import Noncontent from './Non-Content/Noncontent'
import '../JumboSection/Jumbo.css'

export default function Jumbo() {
    return (
        <div className="jumbodiv">
            <Content/>
            <Noncontent/> 
            
        </div>
    )
}
