import React, {useState} from "react";
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import Modal from "../UI/Modal";

const Header=(props)=>{
    const [modalWinStatus, setmodalWinStatus]=useState(false);
    
    const clickHandler=()=>{
        setmodalWinStatus(true);
    };
    const closeCartHandler=()=>{
        setmodalWinStatus(false);        
    };

    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Your meals</h1>
                <HeaderCartButton onClick={clickHandler} type='submit'/>
            </header>
            {modalWinStatus && <Modal onClick={closeCartHandler}/>}
        </React.Fragment>
    );
}

export default Header;