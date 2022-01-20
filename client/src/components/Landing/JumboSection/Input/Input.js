import React from 'react'
import { useSelector } from 'react-redux'
// import '../Input/Input.css'

export default function Input() {
    const {location} = useSelector(state => state.locateState)
    return (
        <input type="text" placeholder="Enter your delivery location" value={location}></input>
    )
}
