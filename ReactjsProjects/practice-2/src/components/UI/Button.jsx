import React from "react";
import styles from './Button.module.css';


const Button =(props)=>{

    return(
        <button 
            className={ `${styles[props.ButtonStyle]} ${styles.button}`}            
            onClick={props.onClick}
            type={props.type || "button"}>
                {props.name} {props.children}
        </button>
    );
}

export default Button;