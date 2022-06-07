import React from "react";
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header=()=>{
    return(
        <header className={styles.header}>
            <h1>Your meals</h1>
            <HeaderCartButton/>
        </header>
    );
}

export default Header;