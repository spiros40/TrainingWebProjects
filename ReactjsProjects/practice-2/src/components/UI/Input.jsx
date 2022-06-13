import React from "react";
import styles from './Input.module.css'

const Input=(props)=>{
    return(        
        <div className={styles.input} key={props.id}>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="number" name={props.name} min="0" max="10" placeholder="0" value={props.value}/>                
        </div>        
    );
}

export default Input;