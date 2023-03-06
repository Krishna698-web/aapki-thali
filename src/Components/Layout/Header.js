import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import Image from '../../assets/white.jpg';

import classes from './Header.module.css';

const Header = (props) => {

  return (
    <div className={classes.header}>
        <header>
            <h1>aapkiThali</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <section>
            <img src ={Image} alt='Table full of food'/>
        </section>
    </div>
  )
}

export default Header