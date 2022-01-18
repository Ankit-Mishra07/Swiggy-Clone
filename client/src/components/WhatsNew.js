import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Styles/products.module.css'

const WhatsNew = () => {

    const { products } = useSelector(state => state.productState)

    const whatsnew = products.filter((e) => {
        return e.newly_added === true
    })

    return (
        <div>
        <h1 className={style.catHead}>What's new</h1>

        <div className={style.products_box}>
            {
                whatsnew.map((e) => (
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

export default WhatsNew
