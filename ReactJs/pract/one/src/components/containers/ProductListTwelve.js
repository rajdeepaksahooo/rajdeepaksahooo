import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponentTwelve from './ProductComponentTwelve'
import axios from 'axios'
import { setProductsTwelve} from '../redux/actions/ProductActions'
import classes from './ProductComponent.module.css'

const ProductListOne = () => {
    

    const product = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductsOne= async()=>{
        const response = await axios.get('https://zonewp.com/wp-json/wp/v2/posts?page=11')
        .catch(err=>{console.log('Err'+ err)})
        console.log(response.data)
        dispatch(setProductsTwelve(response.data))
    } 
    
    useEffect(()=>{
        fetchProductsOne()
    },[])
    
    

    return(
        <div className='ui grid container mt-5' className={classes.main}>
            <ProductComponentTwelve></ProductComponentTwelve>
        </div>
    )
}
export default ProductListOne