import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Products/action'
import style from '../Styles/products.module.css'
import Premium from './Premium'
import SideNav from './SideNav'
import TopPicks from './TopPicks'
import WhatsNew from './WhatsNew'
const Products = () => {


    const dispatch = useDispatch()

    const {products} = useSelector(state => state.productState)

    const getProducts = async() => {
        let res = await fetch('http://localhost:5000/products')
        let data = await res.json()
        console.log(data)
        dispatch(getAllProducts(data))
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <>

        <div className={style.products_container}>
            <div>
                <SideNav />
            </div>
            <div>
                <TopPicks />
                <WhatsNew />
                <Premium />
            </div>
        </div>
            
        </>
    )
}

export default Products
