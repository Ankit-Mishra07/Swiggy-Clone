import React from 'react'
import Image from '../../Restaurants/Image/Image'
import '../Non-Content/Noncontent.css'
import food from '../../../../Images/swiggy2.jpg'

export default function Noncontent() {
    return (
        <div className="noncontentdiv">
            <Image src={food} imgcls="noncontentimg"/>
        </div>
    )
}
