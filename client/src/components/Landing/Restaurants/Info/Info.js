import React from 'react'
import Image from '../Image/Image'
import './Info.css'

export default function Info() {
    return (
        <div className="infodiv">
            <h2>Restaurants in <br/>your pocket</h2>
            <p className="infopara">Order from your favorite restaurants & track <br/> on the go, with the all-new Swiggy app.</p>
            <div className="imgdiv">
                <Image 
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                    imgcls="googlePlay"
                />
                <Image 
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                    imgcls="appStore"
                />
            </div>
        </div>
    )
}
