import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import ProductClicked from '../components/ProductClicked';
import style from '../Styles/productDetail.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../Redux/Cart/action';
import { subTotal } from '../Redux/Total/action';
const ProductDetail = () => {
  const {id} = useParams()
  const [data, setData]= useState({})
  const [lists, setLists] = useState([])
  const [veg , setVeg] = useState(false)
  const dispatch = useDispatch()
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
},[lists])
  
  useEffect(() => {
      getData()
  },[])



  const {userData} = useSelector(state => state.userState)
  const {total} = useSelector(state => state.totalState)

  
const handlevege = () =>  {
    let updated =  lists.filter((e) => {
      return e.veg === true
    })

    setLists(updated)
    setVeg(true)
}



const AddtoCart = (e) => {
  delete e._id
  e["user"] = userData[0]._id
  fetch('http://localhost:5000/cart', {
    method : 'POST',
    body : JSON.stringify(e),
    headers : {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  .then(res => {
    console.log(res)
    // dispatch(subTotal(e.price))
  })
  // console.log(e)
  // getCartData()
}



  const getCartData = async () => {
    let res = await fetch('http://localhost:5000/cart')
    let dat = await res.json()
    dat.map((e) => (
     dispatch(subTotal(e.price))
    ))
    dispatch(addToCart(dat))
  }

  useEffect(() => {
    getCartData()
  
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
                    <button className={style.addtoCart} onClick={() => AddtoCart(e)}>ADD</button>
                  </div>
                </div>
              ))
            }





            </div>

        </div>
        

        
        <div className={style.cart_container}>
              <div>
                <h1>Cart</h1>
                <p><span>({cart.length})</span>ITEMS</p>
              </div>
              <div>
                {
                  cart.map((e) => (
                    <div key={e._id} className={style.cart__card}>

                      <span><i class="far fa-stop-circle" style={{color : e.veg ? "#4D9374" : "#8C614C"}}></i></span>
                      <span>{e.name}</span>
                      <span>₹{e.price}</span>
                 
                    </div>

               
                  ))
                }
              </div>
              <div className={style.total_box}>
                <h3>Subtotal</h3>
                <h3>₹{total}</h3>
              </div>
              <div className={style.checkOutBox}>
                <button>CHECKOUT</button>
              </div>

        </div>




    </div>
    </div>

  </>;
};

export default ProductDetail;
