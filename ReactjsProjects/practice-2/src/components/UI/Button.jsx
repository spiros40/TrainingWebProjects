import React from "react";
import styles from './Button.module.css';


const Button =(props)=>{

    return(
        <button 
        /*` gives detailed style ${styles[props.ButtonStyle]} 
            gives the basic button style ${styles.button}` */
            className={ `${styles[props.ButtonStyle]} ${styles.button}`}            
            onClick={props.onClick}
            type={props.type || "button"}>
                {props.name} {props.children}
        </button>
    );
}

export default Button;