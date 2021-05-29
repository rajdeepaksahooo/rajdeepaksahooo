import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponentEleven from './ProductComponentEleven'
import axios from 'axios'
import { setProductsEleven} from '../redux/actions/ProductActions'
import classes from './ProductComponent.module.css'

const ProductListOne = () => {
    

    const product = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductsOne= async()=>{
        const response = await axios.get('https://zonewp.com/wp-json/wp/v2/posts?page=10')
        .catch(err=>{console.log('Err'+ err)})
        console.log(response.data)
        dispatch(setProductsEleven(response.data))
    } 
    
    useEffect(()=>{
        fetchProductsOne()
    },[])
    
    

    return(
        <div className='ui grid container mt-5' className={classes.main}>
            <ProductComponentEleven></ProductComponentEleven>
        </div>
    )
}
export default ProductListOne