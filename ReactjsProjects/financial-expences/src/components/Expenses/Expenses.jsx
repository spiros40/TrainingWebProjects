import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"


function Expenses(props) {
  
  return (
    <Card className="expenses">
    {props.items.forEach(element=>{
      <ExpenseItem         
        title={element.title}
        amount={element.amount}
        date={element.date}
      /> })}
         
    </Card>
  );
}

export default Expenses;
