import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import ProductClicked from '../components/ProductClicked';
import style from '../Styles/productDetail.module.css'
import {useSelector, useDispatch} from 'react-redux'
const ProductDetail = () => {
  const {id} = useParams()
  const [data, setData]= useState({})
  const [lists, setLists] = useState([])
  const [veg , setVeg] = useState(false)

  const {cart} = useSelector(state => state.cartState)

  const getData = async() => {
    let res = await fetch(`http://localhost:5000/products/${id}`)
    let dat = await res.json()
    setData(dat)
  }
  
  const getByCat = async () => {
    let res = await fetch(`http://localhost:5000/products/?category=${data.category}`)
    let dat = await res.json()
    setLists(dat)
    
  }
  useEffect(() => {
    getByCat() 
},[])
  
  useEffect(() => {
      getData()
  },[])

  


const handlevege = () =>  {
    let updated =  lists.filter((e) => {
      return e.veg === true
    })

    setLists(updated)
    setVeg(true)
}

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
              <div onClick={handlevege} style={{color : veg && "#60B246"}}>Veg Only</div>
              <div>
              <i class="far fa-heart"></i><span>Favourite</span>
              </div>
            
            </div>

            <h1 className={style.headof_bottom}>{data.category}</h1>

            <div>

            {
              lists.map((e) => (
                <div className={style.products_list_data}>
                  <div className={style.product_list_text}>
                    <div><i class="far fa-stop-circle" style={{color : e.veg ? "#4D9374" : "#8C614C"}}></i></div>
                    <div>{e.name}</div>
                    <div>₹{e.price}</div>
                    <div>{e.description}</div>
                  </div>
                  <div>
                    <img src={e.img_url} alt="" />
                    <button>ADD</button>
                  </div>
                </div>
              ))
            }


            </div>

        </div>
        

        
        <div></div>


    </div>
    </div>

  </>;
};

export default ProductDetail;
