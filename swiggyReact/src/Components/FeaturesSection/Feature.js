import React from 'react'
import Card from './Cards/Card.js'
import './Feature.css'
export default function Feature() {
    return (
        <section className="features">
            
            <Card
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" 
                h2="No Minimum Order"
                para1="Order in for yourself or for the group,"
                para2=" with no restrictions on order value"
            />
            <Card
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" 
                h2="Live Order Tracking"
                para1="Know where your order is at all times,"
                para2=" from the restaurant to your doorstep"
            />
            <Card
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" 
                h2="Lightning-Fast Delivery"
                para1="Experience Swiggy's superfast delivery"
                para2="for food delivered fresh & on time"
            />

        </section>
    )
}
