import React from "react";
import style from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm=(props)=>{
    return(
      <form className={style.form}>
        <Input name={props.id}/>
        <button>+ Add</button>
      </form>        
    );
}

export default MealItemForm;