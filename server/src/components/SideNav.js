import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPremium,
  getSeeAll,
  getTop_picks,
  getVege,
  getWhatsnew,
} from "../Redux/ForSideNav/action";
import style from "../Styles/side_nav.module.css";
const SideNav = () => {
  const { top_picks, vege, whatsnew, premium, seeAll } = useSelector(
    (state) => state.sideNavState
  );

  const dispatch = useDispatch();

  return (
    <div className={style.side_nav_container}>
      <a
        href="#top_picks"
        className={style.side_nav_child}
        style={{ backgroundColor: top_picks ? "#E46D47" : "#fff" }}
        onClick={() => {
          dispatch(getTop_picks());
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/rng/md/carousel/production/ser2sttildk9yt7t2s91"
          alt=""
        />
        <span style={{ color: top_picks ? "#fff" : "#282c3f" }}>Top Picks</span>
      </a>
      <a
        href="#whatsnew"
        className={style.side_nav_child}
        style={{ backgroundColor: whatsnew ? "#E46D47" : "#fff" }}
        onClick={() => {
          dispatch(getWhatsnew());
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/hxizld3pqhnk0smw27sl"
          alt=""
        />

        <span style={{ color: whatsnew ? "#fff" : "#282c3f" }}>What's New</span>
      </a>
      <a
        href="#premium"
        className={style.side_nav_child}
        style={{ backgroundColor: premium ? "#E46D47" : "#fff" }}
        onClick={() => {
          dispatch(getPremium());
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/marketing-dashboard/carousel/ftnsdmo6fotidtzobbm2"
          alt=""
        />
        <span style={{ color: premium ? "#fff" : "#282c3f" }}>Premium</span>
      </a>
      <a
        href="#vegetarian"
        className={style.side_nav_child}
        style={{ backgroundColor: vege ? "#E46D47" : "#fff" }}
        onClick={() => {
          dispatch(getVege());
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/bm8bziikwyvwqsml1clm"
          alt=""
        />
        <span style={{ color: vege ? "#fff" : "#282c3f" }}>Vegetarian Options</span>
      </a>
      <a
        href="#seeall"
        className={style.side_nav_child}
        style={{ backgroundColor: seeAll ? "#E46D47" : "#fff" }}
        onClick={() => {
          dispatch(getSeeAll());
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/See_all_cj8kln"
          alt=""
        />
        <span style={{ color: seeAll ? "#fff" : "#282c3f" }}>See All</span>
      </a>
    </div>
  );
};

export default SideNav;
