import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponentNinteen from './ProductComponentNinteen'
import axios from 'axios'
import { setProductsNinteen} from '../redux/actions/ProductActions'
import classes from './ProductComponent.module.css'

const ProductListOne = () => {
    

    const product = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductsOne= async()=>{
        const response = await axios.get('https://zonewp.com/wp-json/wp/v2/posts?page=18')
        .catch(err=>{console.log('Err'+ err)})
        console.log(response.data)
        dispatch(setProductsNinteen(response.data))
    } 
    
    useEffect(()=>{
        fetchProductsOne()
    },[])
    
    

    return(
        <div className='ui grid container mt-5' className={classes.main}>
            <ProductComponentNinteen></ProductComponentNinteen>
        </div>
    )
}
export default ProductListOne