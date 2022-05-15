import React, {useState} from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilteredYear]=useState('2021');
  
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  
  const yearFilteredArray = props.items.filter((item)=>{
    return  item.date.getFullYear().toString()===filterYear;
  });

  return (
    <Card className="expenses">    
    <ExpenseFilter selected={filterYear} onChangeFilter ={filterChangeHandler} />   
    <ExpenseList items={yearFilteredArray}/>
    </Card>
  );
}
export default Expenses;
