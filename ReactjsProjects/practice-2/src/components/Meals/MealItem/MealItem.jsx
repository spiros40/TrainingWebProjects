import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import styles from './MealItem.module.css';
import CartContext from "../../../store/cart-context";
import CartProvider from "../../../store/CartProvider";

const MealItem=(props)=>{

    const cartCtx = useContext(CartContext);
    const test=useContext(CartProvider);

    const addItemHandler = amount => {
        amount.preventDefault()
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        });
        console.log("in context " + test);
      };

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