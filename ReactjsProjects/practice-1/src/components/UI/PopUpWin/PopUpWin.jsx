import React from "react";
import Button from "../Button/Button";
import "./PopUpWin.css";

const PopUpWin=(props)=>{
    
    const ButtonPresed=(event)=>{        
        props.onClosePopUpWin();                
      }
      
    return(        
        <div className="backdrop" onClick={ButtonPresed}>
            <div className="modal">
            <div className="title"><h2>{props.title}</h2></div>
            <div className="content ">{props.content}</div>
            <div className="actions ">
                <Button onClick={ButtonPresed} type="submit" name={props.buttonName}/></div>
            </div>
        </div>
    );
}

export default PopUpWin;