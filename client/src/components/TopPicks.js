import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Styles/products.module.css'
const TopPicks = () => {

    const { products } = useSelector(state => state.productState)

    const topicks = products.filter((e) => {
        return e.top_pick === true
    })

    return (
        <div>
            <h1 className={style.catHead}>Top Picks</h1>

            <div className={style.products_box}>
                {
                    topicks.map((e) => (
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

export default TopPicks
