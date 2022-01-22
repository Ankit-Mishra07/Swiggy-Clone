import React from 'react';
import { useSelector } from 'react-redux';
import emptyImg from '../../Images/emptyimg.png'
const MidPart = () => {

    const {userData} = useSelector(state => state.userState)

    return (
        <div className='mid_part'>
            <div className='mid_one'>
                <div>
                 <h1>Our systems are acting up</h1>
                 <p>We are experiencing temporary technical difficulties</p>
                 <span>CLEAR CART</span>
                </div>
                <div>
                <h1>Logged In</h1>
                 <h3>{userData[0].name} | {userData[0].mobile}</h3>
                 <div className='btn'>
                 {/* <div className='login'>
                     <p>have an account</p>
                     <h1>Login</h1>
                     </div> 
                     <div className='signup'>
                     <p>New to swiggy?</p>
                     <h1>signup</h1>
                     </div>   */}
                    </div>
                </div>
                <div>
                    <h1 className='Dp'>Delivery address</h1>
                </div>
                <div>
                <h1 className='Dp'>Payment</h1>
                </div>
            </div>
            <div>
                <h1>Cart Empty</h1>
                <img src={emptyImg} alt="" />
                <p>Good food is always cooking!.</p>
                <p>Go ahead, order some yummy</p>
                <p>items from the menu.</p>
            </div>            
        </div>
    );
};

export default MidPart;