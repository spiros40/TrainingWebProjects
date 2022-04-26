import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
 

const ExpenseItem=(props)=>{    
    const [title, setTitle]=useState(props.title);
    
    const clickHandler=()=>{setTitle("--1--");
    setTimeout(function() {
        setTitle("--2--");
      }, 1000);
      setTimeout(function() {
        setTitle("--3--");
      }, 2000);
      setTimeout(function() {
        setTitle("--4--");
      }, 3000);  
        
    }
    return (
        <Card className="expense-item">            
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler} >Change title</button>
            </div>
        </Card>);

}

export default ExpenseItem;