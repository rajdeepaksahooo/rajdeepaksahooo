import React ,{useEffect}from 'react'
import {useSelector} from 'react-redux'
import classes from './ProductComponent.module.css'
import axios from 'axios'
const ProductComponent = () => {
    
    const product = useSelector((state)=>state.allproducts.products);
    var img ;
    const fetchProductImage= (featured_media)=>{
        const nd = () => {
            
            const response =  axios.get(`https://zonewp.com/wp-json/wp/v2/media/${featured_media}`)
            
            .then(x=>{
                // console.log(x.data.guid.rendered)
                return x.data.guid.rendered;
                img
            })
            .catch(err=>{console.log('Err'+ err)})
            
        }
        
        nd();
 
    } 
    console.log()
  
    const renderlist=product.map((products)=>{ 
        const {title,id,featured_media}=products;
        // console.log('id'+id,title)
        
        return(
            <div className='four column wide' className={classes.item} key={id}>
                <div className='ui link cards' className={classes.single}>
                    <div className={classes.one}>
                        
                        <div >
                        <div className='image'>
                        {fetchProductImage(featured_media)}
                        </div>
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