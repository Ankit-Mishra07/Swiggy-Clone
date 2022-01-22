import React from 'react';
import appStore from '../../Images/appStore.png'
import googlePlay from '../../Images/googlePlay.png'
const Store = () => {
    return (
        <div className='store'>
            <a href=""><img src={appStore} alt="" /></a>
            <a href=""><img src={googlePlay} alt="" /></a>
            
        </div>
    );
};

export default Store;