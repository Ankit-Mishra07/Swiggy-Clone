import React from 'react'
import Info from './Info/Info'
import './Restaurant.css'
import Image from './Image/Image.js'

export default function Restaurant() {
    return (
        <section className="preview">
            <Info/>
            <Image 
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
                imgcls="ss1"
            />
            <Image 
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" 
                imgcls="ss2"
            />
        </section>
    )
}
