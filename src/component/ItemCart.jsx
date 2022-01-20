import React from 'react';
import Scroll from './Scroll';
const ItemCart = () => {
    return (
        <div className='item_part'>
            <div className='item_one'>
                <div>
                <h1>Account</h1>
                 <p>To place your order now, log in to your existing account or sign up.</p>
                 <div className='btn'>
                 <div className='login'>
                     <p>have an account?</p>
                     <h1>Login</h1>
                     </div> 
                     <div className='signup'>
                     <p>New to swiggy?</p>
                     <h1>signup</h1>
                     </div>  
                    </div>
                </div>
                <div>
                    <h1 className='Dp'>Delivery address</h1>
                </div>
                <div>
                <h1 className='Dp'>Payment</h1>
                </div>
            </div>
            <div className='resName'>
             <div>
                 <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/xdxwcxkttnahc6b8v8yp" alt="" />
             </div>
             <div>
                 <p>Archu Res </p>
             </div>
             <Scroll></Scroll>
             {/* <input type="text" name="" id="" placeholder='any suggesions? we well pass it on' className='sugg'  /> */}
            </div>           
        </div>
    );
};

export default ItemCart;