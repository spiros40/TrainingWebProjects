import React from "react";
import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return(
    <div className="new-expense">
        {/* Adding a lisener to take the props with functions help by passing to element*/}
       <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>);
}

export default NewExpense;