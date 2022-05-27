import React from "react";
import "./Input.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const errorMessage={
    title:"",
    content:"",
    buttonName:""
}

const Input=(props)=>{    
    
    const AddDataHandler=(event)=>{
        //Throw errors
        if (event.target[0].value.trim().length===0||event.target[1].value.trim().length===0){
            errorMessage.title="Empty fields";
            errorMessage.content="you must enter username- age";
            errorMessage.buttonName="Close";    
            callErrorWin();
        }else if (event.target[1].value<0||event.target[1].value>100){
            errorMessage.title="Age value error";
            errorMessage.content="you must enter correct age value 100<Age>0";
            errorMessage.buttonName="Close";    
            callErrorWin();
        }else{              
            props.userAdd(event.target[0].value, event.target[1].value);
        }
        /*The preventDefault() method cancels the event if it is cancelable,
        meaning that the default action that belongs to the event will not occur.
        For example:
        Clicking on a "Submit" button, prevent it from submitting a form
        Clicking on a link, prevent the link from following the URL
        */
        event.preventDefault();
        //clear input old values
        event.target.reset();        
    }

    const callErrorWin=()=>{
        props.onOpenPopUpWin(errorMessage.title, errorMessage.content,errorMessage.buttonName);
    }

    return ( 
        <Card>
            <form onSubmit={AddDataHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    name="username" 
                    placeholder="Enter your Username"/>
                <label htmlFor="age">Age</label>
                <input 
                    id="age" 
                    type="number" 
                    name="age" 
                    placeholder="Enter your Age"/>
                <Button type="submit" name={"Add"}/>                
            </form> 
        </Card>
    );
}

export default Input;