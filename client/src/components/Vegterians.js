import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Styles/products.module.css'

const Vegterians = () => {
    const { products } = useSelector(state => state.productState)

    const premium = products.filter((e) => {
        return e.exclusive === true
    })
    return (
        <div id='vegetarian'>
        <h1 className={style.catHead}>Vegetarian Options</h1>

        <div className={style.products_box}>
            {
                premium.map((e) => (
                    <div className={style.productCard} key={e._id}>
                        <div>
                            <img src={e.img_url} alt="" />
                        </div>
                        <div className={style.naCat}>
                            <h5>{e.name.substring(0, 26)}</h5>
                            <p>{e.category}</p>
                        </div>
                        <div>
                        <div className={style.rat}>
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
    )
}

export default Vegterians
