import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponentFourteen from './ProductComponentFourteen'
import axios from 'axios'
import { setProductsFourteen} from '../redux/actions/ProductActions'
import classes from './ProductComponent.module.css'

const ProductListOne = () => {
    

    const product = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductsOne= async()=>{
        const response = await axios.get('https://zonewp.com/wp-json/wp/v2/posts?page=13')
        .catch(err=>{console.log('Err'+ err)})
        console.log(response.data)
        dispatch(setProductsFourteen(response.data))
    } 
    
    useEffect(()=>{
        fetchProductsOne()
    },[])
    
    

    return(
        <div className='ui grid container mt-5' className={classes.main}>
            <ProductComponentFourteen></ProductComponentFourteen>
        </div>
    )
}
export default ProductListOne