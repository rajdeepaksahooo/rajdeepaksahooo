import React from 'react'
import classes from './NavBar.module.css'

var NavBAr = () => {
    return( 
            <div className={classes.main}>
                <nav id='nav'>
                    
                    <a href='' className={classes.a}>Dashboard</a>
                    <a href=''>Posta</a>
                    <a href=''>Pages</a>
                </nav>
            </div>)
}
export default NavBAr;