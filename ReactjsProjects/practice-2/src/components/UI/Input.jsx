import React from "react";
import styles from './Input.module.css'

const Input=(props)=>{
    return(
        <React.Fragment>
            <form className={styles.input} key={props.id}>
                <label htmlFor={props.id}>Amount</label>
                <input type="number" name={props.id} min="0" max="10" placeholder="0"/>
                <button>test</button>
            </form>
        </React.Fragment>
    );
}

export default Input;