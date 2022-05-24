import React from "react";
import "./Button.css";

const Button=(props)=>{
    const onClickButton=(event)=>{
        console.log(event.target.outerHTML);
    }
    const ButtonPresed=(event)=>{
        console.log("ButtonPresed");
      }

    return(
        <div>            
            <button onClick={props.onClick}> {props.name}</button>
        </div>
    );

}


export default Button;