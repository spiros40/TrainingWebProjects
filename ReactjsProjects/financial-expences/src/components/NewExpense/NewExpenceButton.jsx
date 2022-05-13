import React, {useState} from "react";
import "./NewExpenseButton.css";

const NewExpenseButton=(props)=>{
    const ClickHandler=(props)=>{

    }
    props.target.ClickHandler(true);
     console.log(props.onClick);

    
    return (<div className="new-expense">
        <button className="new-expense button" onClick={ClickHandler}> Add New Expence.</button>
    </div>);
}

export default NewExpenseButton;
