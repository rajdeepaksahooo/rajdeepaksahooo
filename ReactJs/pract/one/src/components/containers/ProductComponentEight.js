import React ,{useEffect}from 'react'
import {useSelector} from 'react-redux'
import classes from './ProductComponent.module.css'
import axios from 'axios'
const ProductComponent = () => {
    const product = useSelector((state)=>state.allproducts.page9);
  
    const renderlist=product.map((products)=>{ 
        const {title,id,featured_media}=products;
        // console.log('id'+id,title)
        
        return(
            <div className='four column wide' className={classes.item} key={id}>
                <div className='ui link cards' className={classes.single}>
                    <div className={classes.one}>
                        
                        <div >
                        <div className='image'></div>
                            <div className='header'>{title.rendered}</div>
                            
                            <button>View Products</button>
                        </div>
                    </div>

                </div>
         
            </div>
        )
    })
    
  

    return(
       <div className={classes.items}>
           {renderlist}
       </div>
    );
}
export default ProductComponent