import React from 'react'
import Image from '../../Restaurants/Image/Image'
import Buttonsdiv from '../ButtonsDiv/Buttonsdiv.js'
import '../Header/Header.css'
import swiggyimg from '../../../../Images/Swiggy.png'

export default function Header() {
    return (
        <div className="header">
            <Image src={swiggyimg} imgcls="headerswiggy"/>
            <Buttonsdiv/>
            
        </div>
    )
}
