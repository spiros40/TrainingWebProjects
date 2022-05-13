import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";


const ExpenseList=(props)=>{
  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expences.</h2>

  /*if(props.items.length > 0){
    expenseContent=props.items.map((element) => (
      <ExpenseItem     
        key={element.id}    
        title={element.title}
        amount={element.amount}
        date={element.date}
          />))*/
          /*Or another way
           {yearFilteredArray.length===0 ? <p>No items found.</p>:yearFilteredArray.map(element => {      
        return(
          <ExpenseItem     
            key={element.id}    
            title={element.title}
            amount={element.amount}
            date={element.date}
        /> )}
      )}          */
  }
  return(props.items.map((element) => (
    <ExpenseItem     
      key={element.id}    
      title={element.title}
      amount={element.amount}
      date={element.date}
        />)));
}

export default ExpenseList;