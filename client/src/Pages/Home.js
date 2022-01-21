import React, { useEffect } from 'react'
import Products from '../components/Products'
import RestaurentProducts from '../components/RestaurentProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Products/action'
import { Navbar } from '../components/Navbar'
import Carousel from 'react-elastic-carousel'
import { Slider } from '../components/Slider'
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

    const breakPoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:2},
        {width: 768, itemsToShow:3},
        {width: 1200, itemsToShow:4}
      ];

    return (
        <>
            <Navbar />

            <Carousel breakPoints={breakPoints}>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ktqdpdx3oirpleckr0sy"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qygzbfvrgvnfzknc0hjh"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nvdvfu2ex7eb0bhct2y3"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno"/>
                <Slider imgs="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6"/>
            </Carousel>
            
            <Products />
            <RestaurentProducts />
        </>
    )
}

export default Home
