import React,{useState,useEffect} from 'react'
import NavBAr from '../navbar/NavBar';
import classes from '../layout/LayOut.module.css'


var LayOut= ()=>{
    const [data,setData] = useState(null);
    const [update,setUpdate] = useState(null);
    const getData=()=>{
        fetch('https://zonewp.com/wp-json/wp/v2/posts'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson[0]['date']);
          });
      }
      useEffect(()=>{
        getData()
      },[])
    return( <div className={classes.wrapper}>

                <NavBAr></NavBAr>
                
                <div className={classes.div}>
                    <h1>Name: Ram</h1>
                </div>
            </div>)
}

export default LayOut;