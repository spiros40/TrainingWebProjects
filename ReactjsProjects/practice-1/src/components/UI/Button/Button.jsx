import React from "react";
import "./Button.css";

const Button=(props)=>{
    // const onClickButton=(event)=>{
    //     console.log(event.target.outerHTML);
    // }
    // const ButtonPresed=(event)=>{
    //     console.log("ButtonPresed");
    //   }

    return(
        <div>            
            <button type={props.type || "button"} onClick={props.onClick}> {props.name}
            {/*or i can use {props.children} and write name in brackets*/}</button>
        </div>
    );

}


export default Button;