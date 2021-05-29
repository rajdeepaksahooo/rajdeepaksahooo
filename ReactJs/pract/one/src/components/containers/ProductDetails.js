import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {
    const product = useSelector((state)=>state)
    console.log(product)
    return(
        <div className='ui grid container'>
            <h1>Product Details</h1>
        </div>
    )
}
export default ProductDetails