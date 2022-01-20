import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLogin } from '../../../../Redux/ForLogin/action'
import { showSignup } from '../../../../Redux/ForSignup/action'
import '../Button/Button.css'

export default function Button(props) {
    const dispatch = useDispatch()
    const {show} = useSelector(state => state.showLogState)
    const {showsign} = useSelector(state => state.showSignState)

    const showLoginSide = () => {
        dispatch(showLogin(false))
        dispatch(showSignup(!showsign))
    }
    return (
        <button onClick={showLoginSide} className={props.btncls}>{props.btntext}</button>
    )
}
