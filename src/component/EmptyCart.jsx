import React from 'react';

const EmptyCart = () => {
    return (
        <div className='empty_cart'>
            <div>
            <img src="./images/emptyCart.png" alt="" />
            <h3>Your cart is empty</h3>
            <p>you can go to home page to view more restaurants</p>
            <span> SEE RESTAURANTS NEAR YOU</span>
            </div>
        </div>
    );
};

export default EmptyCart;