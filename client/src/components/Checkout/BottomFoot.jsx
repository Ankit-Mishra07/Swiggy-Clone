import React from 'react';

const BottomFoot = () => {
    return (
        <div className='bottom_foot'>
            <div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="" />
            </div>
            <div style={{color:'white'}}>
                © 2022 Swiggy
            </div>
            <div>
                <div>
                    <a href="">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" alt="" />
                    </a>
                    
                </div>
                <div>
                    <a href="">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" alt="" />
                    </a>               
                </div>
                <div>
                    <a href="">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BottomFoot;