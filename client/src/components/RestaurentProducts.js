import React from 'react'
import style from '../Styles/restaurent.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { getTop_picks } from '../Redux/ForSideNav/action'
import style2 from '../Styles/products.module.css'
const RestaurentProducts = () => {

    const dispatch = useDispatch()

    const {products} = useSelector(state => state.productState)


    return (
        <div className={style.restaurent_prod_container}>
            <h1 className={style.all_restaurent_text}>↓ ALL RESTAURENT</h1>

            <div className={style.rest_container}>
            <nav className={style.rest_nav}>
                <div >
                    <a className={style.to_top} href='#top_picks' onClick={() => {
                        dispatch(getTop_picks())
                    }}>═</a>
                    <span>1590 Restaurents</span>

                </div>


                <div className={style.rest_navigation}>
                    <div>Relevance</div>
                    <div>Delivery Time</div>
                    <div>Rating</div>
                    <div>Cost : Low To High</div>
                    <div>Cost : High To Low</div>
                    <div>Filters <i class="fas fa-filter"></i></div>
                   
                </div>
            </nav>


            <div className={style.rest_products_cont}>
                {
                    products.map((e) => (
                        <div className={style2.productCard} key={e._id}>
                        <div>
                            <img src={e.img_url} alt="" />
                        </div>
                        <div className={style2.naCat}>
                            <h5>{e.name.substring(0, 26)}</h5>
                            <p>{e.category}</p>
                        </div>
                        <div>
                            <div className={style2.rat}>
                            <span style={{color: "#fff",padding:"2px", backgroundColor : e.rating > 4 ? "#48C479": "#DB7C38" }}>★{e.rating}</span>
                            <span>‧</span>
                            <span>{e.average_time}MINS</span>
                            <span>‧</span>
                            <span>₹{e.price}FOR TWO</span>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>

            </div>


        </div>
    )
}

export default RestaurentProducts













