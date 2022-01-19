import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import ProductClicked from '../components/ProductClicked';
import style from '../Styles/productDetail.module.css'

const ProductDetail = () => {
  const {id} = useParams()
  const [data, setData]= useState({})
  const getData = async() => {
      let res = await fetch(`http://localhost:5000/products/${id}`)
      let dat = await res.json()
      setData(dat)
  }
  useEffect(() => {
      getData()
  },[])

  return <>

    <Navbar />

    <div>
    <ProductClicked data={data}/>

    <div className={style.product_detail_bottom}>
      

        <div className={style.productdetail_side}>
          <p>Recommended</p>
          <p>Snacks</p>
          <p>Soups</p>
          <p>Pizzas</p>
          <p>Breads</p>
        </div>
        <div className={style.product_detail_center}>
            <div className={style.product_detail_center_top} >
              
              <div>
              <i class="fas fa-search"></i> <input type="text" placeholder='Search for dishes...' />
              </div>
              <div>Veg Only</div>
              <div>
              <i class="far fa-heart"></i><span>Favourite</span>
              </div>
            
            </div>

            <h1 className={style.headof_bottom}>{data.category}</h1>

            <div>
              
            </div>

        </div>
        

        
        <div></div>


    </div>
    </div>

  </>;
};

export default ProductDetail;
