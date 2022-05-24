import React from "react";
import "./Input.css";
import Button from "../../UI/Button/Button";

const errorMessage={
    title:"",
    content:"",
    buttonName:""
}

const Input=(props)=>{    
    
    const AddData=(event)=>{
        if (event.target[0].value.trim().length===0||event.target[1].value.trim().length===0){
            errorMessage.title="Empty fields";
            errorMessage.content="you must enter username- age";
            errorMessage.buttonName="Close";    
            callErrorWin();
        }else if (event.target[1].value<0||event.target[1].value>100){
            errorMessage.title="Age value error";
            errorMessage.content="you must enter corect age value 100<Age>0";
            errorMessage.buttonName="Close";    
            callErrorWin();
        }
        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        event.preventDefault();
        //clear input old values
        event.target.reset();        
    }

    const callErrorWin=()=>{
        props.onOpenPopUpWin(errorMessage.title, errorMessage.content,errorMessage.buttonName);
    }

    return ( 
        <div className='inputDiv'>
            <form onSubmit={AddData}>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter your Username"/>
                <label>Age</label>
                <input type="number" name="age" placeholder="Enter your Age"/>
                <Button type="submit" name={"Add"}/>                
            </form> 
        </div>
    );
}

export default Input;