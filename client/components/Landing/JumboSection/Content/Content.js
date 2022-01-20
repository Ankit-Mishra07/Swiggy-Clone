import React from 'react'
import Header from '../Header/Header.js'
import '../Content/Content.css'
import Animation from '../Animation/Animation.js'
import Para from '../Paras/Para.js'
import Searchbar from '../Searchbar/Searchbar.js'
import Cities from '../Cities/Cities.js'

export default function Content() {
    return (
        <div className="contentdiv">
            <div className="container">
                <Header/>
                <Animation/>
                <Para cls="para-after-animation" txt="Order food from favourite restaurants near you."/>
                <Searchbar/>
                <Para cls="para-after-search" txt="POPULAR CITIES IN INDIA"/>
                <Cities/>
            </div>
            
        </div>
    )
}
