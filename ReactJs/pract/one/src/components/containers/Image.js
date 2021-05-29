// import React,{useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import ProductComponent from './ProductComponent'
// import axios from 'axios'
// import {setProducts} from '../redux/actions/ProductActions'
// import classes from './ProductComponent.module.css'

// const Image = (props) => {
    
//     const product = useSelector((state)=>state)
//     const dispatch = useDispatch()
//     var guid = props.guid;
//     var newGuid=guid.map((e)=>{
        
//     console.log(product)
//     console.log(props.guid)

//     const fetchProducts= async()=>{
//         const response = await axios.get(`https://zonewp.com/wp-json/wp/v2/media/${props.guid}`).catch(err=>{console.log('Err'+ err)})
//         console.log(response.data)
//         dispatch(setProducts(response.data))
//         fetchProducts()
//     } 
//     })
    
    
//     useEffect(()=>{
       
//     },[])
    
    

//     return(<div></div>)
// }
// export default Image