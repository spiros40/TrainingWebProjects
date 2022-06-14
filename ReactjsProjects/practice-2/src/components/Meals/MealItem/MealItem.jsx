import React from "react";
import MealItemForm from "./MealItemForm";
import styles from './MealItem.module.css';

const MealItem=(props)=>{
    
    const addItemHandler=()=>{
        console.log("addHandler");
    }
    return(
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}> {props.price} &#x20AC;</div>
            </div>
            <div>
                <MealItemForm id={props.id} onClick={addItemHandler}/>
            </div>
        </li>    
    );
}

export default MealItem;