import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, showAddressaction } from '../Redux/ForAddress.js/action';
import style from '../Styles/address.module.css'
import {GetData, saveData} from '../Redux/utils/localstorage'
const Address = () => {

    const [form, setForm] = useState({
        address : "",
        flatno : "",
        landmark : ""
    })

    const {myAddress} = useSelector(state => state.myAddressState)
    const {showAddress} = useSelector(state => state.showAddressState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let {value, name} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }


    const AddMyAddress = () => {
        dispatch(getAddress(form))
        dispatch(showAddressaction(false))
    }


  return showAddress && <div className={style.address_container}>
      <div>
          <button onClick={() => {
              dispatch(showAddressaction(false))
          }}>X</button>
          <h2>Save delivery address</h2>
      </div>
      <div>
          <input type="text" placeholder='Address'  name="address" onChange={(e) => handleChange(e)}/>
          <input type="text" placeholder='Door/Flat No.' name='flatno' onChange={(e) => handleChange(e)} />
          <input type="text" placeholder='Landmark' name='landmark' onChange={(e) => handleChange(e)}/>
      </div>
      <div>
          <button onClick={AddMyAddress}>Save Address & Proceed</button>
      </div>
  </div>;
};

export default Address;
