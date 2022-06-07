import React from "react";
import styles from './Card.module.css';
import Input from "./Input";

const Card=(porps)=>{
    return(
        <div className={styles.card}> 
            {porps.children}
        </div>
    );
}

export default Card;