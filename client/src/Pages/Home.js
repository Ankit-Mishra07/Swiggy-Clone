import React, { useEffect } from 'react'
import Products from '../components/Products'
import RestaurentProducts from '../components/RestaurentProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Products/action'
import { Navbar } from '../components/Navbar'
const Home = () => {
    
    const {products} = useSelector(state => state.productState)
    const dispatch = useDispatch()
    const getProducts = async() => {
        let res = await fetch('http://localhost:5000/products')
        let data = await res.json()
        dispatch(getAllProducts(data))
    }

    useEffect(() => {
        getProducts()
    },[])
    return (
        <>
            <Navbar />
            
            <Products />
            <RestaurentProducts />
        </>
    )
}

export default Home
