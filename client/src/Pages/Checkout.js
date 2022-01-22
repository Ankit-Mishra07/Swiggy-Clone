import React, { useEffect, useState } from 'react';
import EmptyCart from '../components/Checkout/EmptyCart';
import MidPart from '../components/Checkout/MidPart'
import ItemCart from '../components/Checkout/ItemCart'
import CompleteFooter from '../components/Checkout/CompleteFooter'
import { Navbar } from '../components/Navbar';


const Checkout = () => {

  const [cat, setcat] = useState(false)

  const getCartData = async() => {
    let res = await fetch('http://localhost:5000/cart')
    let dat = await res.json()
    if(dat.length !== 0) {
      setcat(true)
    }else {
      setcat(false)
    }
  }

  useEffect(() => {
    getCartData()
  }, [])

  return <div>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    {!cat  && <EmptyCart />}
    {!cat && <MidPart />}
    <div>

  {cat && <ItemCart /> }
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <CompleteFooter />
  </div>;
};

export default Checkout;
