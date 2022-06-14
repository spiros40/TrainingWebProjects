import React from "react";
import style from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm=(props)=>{  
    return(
      <form className={style.form}>
        <Input name="Amount"/>
        <button onClick={props.onClick} type="submit">+ Add</button>
      </form>        
    );
}

export default MealItemForm;