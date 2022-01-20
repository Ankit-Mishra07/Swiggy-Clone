import React from 'react'
import '../ButtonsDiv/Buttonsdiv.css'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { showLogin } from '../../../../Redux/ForLogin/action'

export default function Buttonsdiv() {

    const dispatch = useDispatch()
    const {show} = useSelector(state => state.showLogState)

    const showLoginSide = () => {
        dispatch(showLogin(!show))
    }

    return (
        <div className="btndiv">
            <div style={{cursor: "pointer"}} className="login" onClick={showLoginSide}>Login</div>
            <Button btncls="blackbtn" btntext="Sign up"/>
        </div>
    )
}
