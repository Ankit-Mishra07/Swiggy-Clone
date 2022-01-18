import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Styles/products.module.css'

const WhatsNew = () => {

    const { products } = useSelector(state => state.productState)

    const whatsnew = products.filter((e) => {
        return e.newly_added === true
    })

    return (
        <div id='whatsnew'>  
        <h1 className={style.catHead}>What's new</h1>

        <div className={style.products_box}>
            {
                whatsnew.map((e) => (
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

export default WhatsNew
