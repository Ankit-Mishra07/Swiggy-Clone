import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from '../Styles/productDetail.module.css'
const ProductClicked = ({data}) => {
    

  return (
    <div className={style.product_detail_container}>
    <div>
      <img src={data.img_url} alt="" />
    </div>
    <div className={style.product_data}>
      <h1>{data.name}</h1>
      <p>{data.category}</p>
      <p>{data.location}</p>
      <div className={style.product_data_child}>
        <span>
          <h3>★{data.rating}</h3>
          <p>500+ ratings</p>
        </span>
        <span>
          <h3>{data.average_time}Mins</h3>
          <p>Delivery Time</p>
        </span>
        <span>
          <h3>₹{data.price}</h3>
          <p>Cost for Two</p>
        </span>
      </div>

    </div>
    <div className={style.offersdiv}>
      <h3>OFFER</h3>
      <i class="fas fa-percentage"></i>
      <span>20% off up to ₹50 | Use code TRYNEW</span>
    </div>
</div>
  )
};

export default ProductClicked;
