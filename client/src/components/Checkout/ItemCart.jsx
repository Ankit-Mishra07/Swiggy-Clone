import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Scroll from './Scroll';
import style from '../../Styles//productDetail.module.css'
import { addToCart } from '../../Redux/Cart/action';
import Address from '../Address';
import { showAddressaction } from '../../Redux/ForAddress.js/action';
import swal from 'sweetalert'
import { subTotal } from '../../Redux/Total/action';
import { saveData } from '../../Redux/utils/localstorage';

const ItemCart = () => {
    const {userData} = useSelector(state => state.userState)
  const {total} = useSelector(state => state.subTotalState)
  const {showAddress} = useSelector(state => state.showAddressState)
  const {myAddress} = useSelector(state => state.myAddressState)
  const {cart} = useSelector(state => state.cartState)
  const navigate = useNavigate()

const dispatch = useDispatch()
  const getCartData = async () => {
    let res = await fetch('http://localhost:5000/cart')
    let dat = await res.json()
    let userCart = dat.filter((e) => {
      return userData[0]._id === e.user
    })
  
  
    dispatch(addToCart(userCart))
  }


  const paySuccess = () => {
    swal('Thank You!', 'Ordered Successfully', 'success')

    for(let i = 0 ; i < cart.length; i++) {
      fetch(`http://localhost:5000/cart/${cart[i]._id}`, {
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json'
        }
      }) 
    }
    dispatch(addToCart([]))
    saveData('swiggyTotal', [0])
    navigate('/restaurent')
    // dispatch(subTotal(0))

  }
  useEffect(() => {
    getCartData()
  },[])


    return (
        <div className='item_part'>
            <div className='item_one'>
                <div className='loggedFirstChild' style={{textAlign : "left", paddingLeft: "10px"}}>
                <h1>Logged in ✔️</h1>
                 <h3>{userData[0].name} | {userData[0].mobile}</h3>
                 <div className='btn'>
            
                    </div>
                </div>
                <div >
                   {myAddress.length === 0 && <h1 className='Dp' onClick={() => {
                      dispatch(showAddressaction(!showAddress))
                    }}>Add a delivery address</h1> }

                    {myAddress.length > 0 &&  
                    <div className="myAddressSectionH Dp">
                      {/* <h1>Delivery Address</h1> */}
                     <h4>Address : {myAddress[0].address}</h4> 
                     <h4>Door/Flat No. : {myAddress[0].flatno}</h4>
                     <h4>Landmark : {myAddress[0].landmark}</h4>
                      <button className='changeBtn_' onClick={() => {
                            dispatch(showAddressaction(true))
                      }}>Change</button>
                    </div>
                    }
                    <Address />
                </div>
                <div style={{height : "500px"}}>
                <h1 className='Dp'>Choose payment method</h1>
                {
                  myAddress.length > 0 && <div className='payment__Box'>

                    <div className='payment__method'>
                    <div>Pay On Delivery</div>
                    <div>Wallets</div>
                    <div>Credit/Debit Cards</div>
                    <div>UPI</div>
                    <div>Food Cards</div>
                    </div>

                    <div className='payment__payondelivery'>

                      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_80/image-pay-by-cash_av6bcw" alt="" />
                      <h3>Cash</h3>
                      <p>Online payment recommended to reduce contact between you and delivery partner</p>
                      <button className='paybtnfinal' onClick={paySuccess}>PAY ₹{total}</button>
                    </div>

                  </div>
                }
                </div>
            </div>
            <div style={{height : "400px"}}>
             
            
             <div style={{overflow : "auto"}}>
                {
                  cart.map((e) => (
                    <div key={e._id} className={style.cart__card} style={{alignItems : "center"}}>

                        <img src={e.img_url} alt="" style={{width: "50px", marginLeft:"5px"}}/>
                      <span><i class="far fa-stop-circle" style={{color : e.veg ? "#4D9374" : "#8C614C"}}></i>
                      
                      <span>{e.name}</span></span>
                      <span>₹{e.price}</span>
                 
                    </div>

               
                  ))
                }
              </div>
              <div className='toPay__Box' style={{borderTop : "3px solid black"}}>

              <h4>To Pay</h4>
              <h4>₹{total[total.length-1]}</h4>
              </div>
            </div>           
        </div>
    );
};

export default ItemCart;