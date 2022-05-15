import React from "react";
import "./NewExpenseButton.css";

const NewExpenseButton=(props)=>{
    
    const ButtonClicked=()=>{
        props.onButtonClick();   
    }
    
    return (<div className="new-expense">
        <button className="new-expense button" onClick={ButtonClicked}> Add New Expence.</button>
    </div>);
}

export default NewExpenseButton;
