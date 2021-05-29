import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return(
        <div  className={classes.bg}>
            <div className={classes.container} >
                <a className={classes.first, classes.a}>A</a>
                <a className={classes.a}>Dashboard</a>
                <a className={classes.a}>Posts</a>
                <a className={classes.a}>Pages</a>
            </div>
        </div>
    )
}
export default Header