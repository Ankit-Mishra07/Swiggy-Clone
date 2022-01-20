import React from 'react'
import { useDispatch } from 'react-redux'
import { getLocation } from '../../../../Redux/Location/action'
import '../Locate/Locate.css'

export default function Locate() {

    // const handlelocation = () => {
    //     if(navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition)
    //     }else {
    //         alert("Browser not supporting")
    //     }

    // }

    // async function showPosition(position) {
    //     console.log(position.coords.latitude)
    //     console.log(position.coords.longitude)

    //     let locAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAB1Uvf7bmDKn_y-Xw4CxX8fDVMYJhPlv0&sensor=true`
    //     let res = await fetch(locAPI)
    //     let dat = await res.json()
    //     console.log(dat)
    // }
    const dispatch = useDispatch()
    const handlelocation = () => {
        
        const arr = ["UttarPradesh", "Mumbai", "Delhi", "Bihar"]
        const index= Math.floor(Math.random() * arr.length-1)

        dispatch(getLocation(arr[index]))

    }


    return (
        <div className="Locatediv">
            <p className="locateme" onClick={handlelocation}>Locate Me</p>
        </div>
    )
}
