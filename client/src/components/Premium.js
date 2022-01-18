import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Styles/products.module.css'

const Premium = () => {

    const { products } = useSelector(state => state.productState)

    const premium = products.filter((e) => {
        return e.exclusive === true
    })
    return (
        <div>
        <h1 className={style.catHead}>Premium</h1>

        <div className={style.products_box}>
            {
                premium.map((e) => (
                    <div className={style.productCard} key={e._id}>
                        <div>
                            <img src={e.img_url} alt="" />
                        </div>
                        <div>
                            <h5>{e.name}</h5>
                            <p>{e.category}</p>
                        </div>
                        <div>
                            <div className={style.rat}>
                            <span>{e.rating}</span>
                            <span>{e.average_time}</span>
                            <span>{e.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Premium
