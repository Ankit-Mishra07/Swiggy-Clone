import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../Redux/ForLogin/action';
import { showSignup } from '../../Redux/ForSignup/action';
import style from '../../Styles/login.module.css'
import swal from 'sweetalert'
const Signup = () => {

    const {show} = useSelector(state => state.showLogState)
    const {showsign} = useSelector(state => state.showSignState)
    const dispatch = useDispatch()
    const showLoginSide = () => {
        dispatch(showLogin(true))
        dispatch(showSignup(false))
    }
    const [form, setForm] = useState({
        name : "",
        mobile : "",
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        let {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
        console.log(form)
    }

    const Registerfn = () => {

        if(form.email == "" || form.mobile == "" || form.name == "" || form.password == "") {
            swal("Please!", "Fill All The required area!", "warning");
            return
        }
        if(form.mobile.length !== 10) {
            swal("Please!", "Provide Valid Mobile Number!", "warning");
            return
        }
        if(form.password.length < 6 || form.password === "") {
            swal("Please!", "Provide Strong Password Should not contain character less than 6!", "warning");
            return
        }
        fetch("https://swiggy-server.onrender.com/user/register", {
            method : 'POST',
            body : JSON.stringify(form),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.msg) {
                swal('Error!', `${res.msg}`)
                return
            }
            dispatch(showSignup(false))
            dispatch(showLogin(true))
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return showsign && <div className={style.login_Container}>
      <div className={style.login_cut}><button onClick={() => {
          dispatch(showSignup(false))
      }}>X</button></div>
      <div>
          <div className={style.login_create}>
              <h1>Signup</h1>
              <p>or <span onClick={showLoginSide}>login to your account</span></p>
              <div>___</div>
          </div>
      </div>
      <div className={style.login_input}>
          <input type="number" placeholder='Phone number' name='mobile' onChange={(e) => handleChange(e)} />
          <input type="text" placeholder='Name' name='name' onChange={(e) => handleChange(e)} />
          <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
      </div>
      <div className={style.login_btn}>
          <button onClick={() => Registerfn()}>SIGNUP</button>
          <p>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
      </div>
  </div>;
};

export default Signup;