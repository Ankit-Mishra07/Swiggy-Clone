import React from "react";
import style from '../Styles/side_nav.module.css'
const SideNav = () => {
  return (
    <div className={style.side_nav_container}>
      <div className={style.side_nav_child}>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/hxizld3pqhnk0smw27sl"
          alt=""
        />
        <span>Top Picks</span>
      </div>
      <div className={style.side_nav_child}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/hxizld3pqhnk0smw27sl" alt="" />
          <span>What's New</span>
      </div>
      <div className={style.side_nav_child}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/marketing-dashboard/carousel/ftnsdmo6fotidtzobbm2" alt="" />
        <span>Premium</span>
      </div>
      <div className={style.side_nav_child}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/bm8bziikwyvwqsml1clm" alt="" />
          <span>Vegetarian Options</span>
      </div>
      <div className={style.side_nav_child}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/See_all_cj8kln" alt="" />
          <span>See All</span>
      </div>
    </div>
  );
};

export default SideNav;
