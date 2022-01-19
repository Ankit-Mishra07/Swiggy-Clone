import React from 'react';
import "../../public/Home.css"

import style from '../Styles/navbar.css'

export  const Navbar = ()=>{
   return 
       (
       <div>
          <div className={style.nav-bar} >
    <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" style="height: 60px;width: 80px;margin-left: 40px;"/>
     <div style="margin-left: 50px;font-weight: 500;font-size: 12px;"><b style="margin-right: 5px;"><u>WORK</u></b>Address</div>
    <div style="margin-left: 30vw;"><i style="color: black;" className="fas fa-search"></i>Search</div>
    <div style="margin-left: 5vw;">Offers</div>
    <div style="margin-left: 5vw;"><i className="far fa-life-ring"></i>Help</div>
    <div style="margin-left: 5vw;">Login</div>
    <div style="margin-left: 5vw;"><i className="fas fa-shopping-cart"></i>Cart</div>
    </div>
    <br/>
    <div className="carousel"> 
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/skjsgyvztygdkresy0az" style="margin:10px;margin-left: 50px; height: 300px;width: 300px;margin-top: 75px;"/>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ogkwbsaxlv9czar68ytq" style="margin:10px;height: 300px;width: 300px;margin-top: 75px;"/>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/h6xpo0o00onjmllq7zut" style="margin:10px;height: 300px;width: 300px;margin-top: 75px;"/>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kffyixfhhmyeyiluie3q" style="margin:10px;height: 300px;width: 300px;margin-top: 75px;"/>
    </div>
       </div>
       
       )
   
}

import React from 'react';

const Navbar = () => {
  return <div></div>;
};

export default Navbar;



