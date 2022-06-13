import React from "react";
import styles from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton=(props)=>{
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/> 
            </span>   
            <span>Your cart</span>
            <span className={styles.badge}></span>
            {props.children}
        </button>
    );
}

export default HeaderCartButton;