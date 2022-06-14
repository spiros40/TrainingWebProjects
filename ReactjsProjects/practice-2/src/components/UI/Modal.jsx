import React, {useState, useEffect} from "react";
import styles from './Modal.module.css';
import Input from "./Input";
import ReactDom from "react-dom";
import Button from "./Button";

const Backdrop=()=>{
    return(
        <div className={styles.backdrop}/>
    );
}

const ModalRoot=(props)=>{
    const [quantity, setquantity]=useState(1);
    const [totalPrice, settotalPrice]=useState(0);
    const itemPrice=10;

    useEffect(()=>{
        settotalPrice(quantity*itemPrice);
    },[quantity]);    

    const closeButtonPressed=(event)=>{
        props.onClick();        
    }    
    const orderButtonPressed=()=>{
        console.log(`You order ${quantity} items`);
        console.log(`The cost is ${totalPrice}€`);
    }
    const decrease =()=>{
        if(quantity>1){
            setquantity(quantity-1);            
        }
    }
    const increase=()=>{
        setquantity(quantity+1);        
    }

    return(
        <div className={styles.modal}>
            <form >
                <div className="alingItem">                    
                    <Input name='itemName'  value={quantity}/>
                    <span className={styles.price}>&euro;{itemPrice}</span>                    
                    <Button name="-" ButtonStyle="noBackgroundButton" type="button"
                        onClick={decrease}/>
                    <Button name="+" ButtonStyle="noBackgroundButton" type="button"
                        onClick={increase}/>
                </div>                
                <hr/>
                <div className="alingItem">
                    <p>Total amount <span>{totalPrice}&euro;</span></p>                
                    <Button name="Close" ButtonStyle="noBackgroundButton" type="button" 
                        onClick={closeButtonPressed}/>
                    <Button name="Order" ButtonStyle="withBackgroundButton" type="button"
                        onClick={orderButtonPressed}/>
                </div>                                
            </form>
        </div>
    );
}

const Modal=(props)=>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<ModalRoot onClick={props.onClick}/>, document.getElementById("modal-root"))}
        </React.Fragment>    
    );
}

export default Modal;

