import React from 'react';
import './ExpenseDate.css';

const ExpenseDate=(props)=>{
            return(
                <div className='expense-date'>
                    <div className='expense-date__day'> {props.date.toLocaleString('el-GR',{day:'2-digit'})}</div>
                    <div className='expense-date__month'> {props.date.toLocaleString('el-GR',{month:'long'})}</div>
                    <div className='expense-date__year'> {props.date.getFullYear()}</div>                
                </div>)
        }

export default ExpenseDate;