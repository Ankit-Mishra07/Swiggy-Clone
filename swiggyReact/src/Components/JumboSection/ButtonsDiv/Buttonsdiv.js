import React from 'react'
import '../ButtonsDiv/Buttonsdiv.css'
import Button from '../Button/Button'

export default function Buttonsdiv() {
    return (
        <div className="btndiv">
            <a href="/" className="login">Login</a>
            <Button btncls="blackbtn" btntext="Sign up"/>
        </div>
    )
}
