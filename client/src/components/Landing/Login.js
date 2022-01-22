import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../Redux/ForLogin/action';
import { showSignup } from '../../Redux/ForSignup/action';
import style from '../../Styles/login.module.css'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
import { userDataaction } from '../../Redux/UserData/action';
const Login = () => {

    const [text, setText] = useState('')
    const {show} = useSelector(state => state.showLogState)
    const {location} = useSelector(state => state.locateState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showLoginSide = () => {
        dispatch(showLogin(false))
    }

    useEffect(() => {
        dispatch(userDataaction(null))
    },[])
    const Loginfn = () => {
        if(text.length !== 10) {
            swal('Please!' , 'Enter Valid Phone Number', 'warning')
            return
        }

        let payload = {
            mobile : Number(text)
        }
        fetch('http://localhost:5000/login', {
            method : 'POST',
            body : JSON.stringify(payload),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res.msg)
            if(res.msg) {
                swal('Sorry', `${res.msg}`, 'warning')
                dispatch(showLogin(false))
                dispatch(showSignup(true))
                return
            }
            // console.log(res)
            if(location === "") {
                swal('Please Enter location')
                return
            }
            res['location'] = location
            dispatch(userDataaction(res))
            navigate('/restaurent')
        }).catch((err) => {
            console.log(err)
        })
    }

  return show && <div className={style.login_Container}>
      <div className={style.login_cut}><button onClick={showLoginSide }>X</button></div>
      <div>
          <div className={style.login_create}>
              <h1>Login</h1>
              <p>or <span onClick={() => {
                  dispatch(showLogin(false))
                  dispatch(showSignup(true))
              }}>create an account</span></p>
              <div>___</div>
          </div>
      </div>
      <div className={style.login_input}>
          <input type="number" placeholder='Phone number' onChange={(e) => setText(e.target.value)} />
      </div>
      <div className={style.login_btn}>
          <button onClick={Loginfn}>LOGIN</button>
          <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
      </div>
  </div>;
};

export default Login;



