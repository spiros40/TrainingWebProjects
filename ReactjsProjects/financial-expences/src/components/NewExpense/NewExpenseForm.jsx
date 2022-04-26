import React, {useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm=(props)=>{
    const [enderedTitle, setEnteredTitle]=useState('');
    const [enderedAmount, setEnteredAmount]=useState('');
    const [enderedDate, setEnteredDate]=useState('');
    //Or you can use an object but you must update so be carefull 
    // const [userInput, setUserInput]=useState({
    //     title:"",
    //     amount:"",
    //     date:""
    // });

    const titleHandler=(event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value})
        //best practice is to use a function
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value};})
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value)
         // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value})
        //best practice is to use a function
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredAmount:event.target.value};})
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value)
         // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value})
        //best practice is to use a function
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value};})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData ={
            title:enderedTitle,
            amount:enderedAmount,
            date:new Date(enderedDate)
        }
        //passing data to parent
        props.onSaveExpenseData(expenseData);
        //After data stored clears the inputs        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enderedTitle} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enderedAmount} min="0,01" step="0,01" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enderedDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    </div>);
}

export default NewExpenseForm;