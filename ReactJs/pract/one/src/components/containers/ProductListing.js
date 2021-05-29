import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts} from '../redux/actions/ProductActions'
import classes from './ProductComponent.module.css'

const ProductListing = () => {
    

    const product = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProducts= async()=>{
        const response = await axios.get('https://zonewp.com/wp-json/wp/v2/posts')
        .catch(err=>{console.log('Err'+ err)})
        console.log(response.data.featured_media)
        console.log(response.data)
        dispatch(setProducts(response.data))
    } 
    
    useEffect(()=>{
        fetchProducts()
    },[])
    
    

    return(
        <div className='ui grid container mt-5' className={classes.main}>
            <ProductComponent></ProductComponent>
        </div>
    )
}
export default ProductListing