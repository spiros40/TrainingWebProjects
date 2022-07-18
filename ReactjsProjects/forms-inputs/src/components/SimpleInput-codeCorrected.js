import { useState } from "react";

const SimpleInput = (props) => {
const [enteredName, setEnteredName]=useState("");
const [enteredNameTouched, setEnteredNameTouched]=useState(false);

const enteredNameIsValid=enteredName.trim()!=='';
const nameInoutIsValid=enteredNameIsValid&&enteredNameTouched;

//reads input on every change
const nameInputChangeHandler=(event)=>{
  setEnteredName(event.target.value);
}

const nameInoutBlurHandler=(event)=>{
  setEnteredNameTouched(true);
  
}

const formSubmissionHandler=(event)=>{
  event.preventDefault();
  setEnteredNameTouched(true);
  
  if(enteredNameIsValid){
   return;
  }

  setEnteredName('');
  setEnteredNameTouched(false);
}
  
  const nameInputClasses=nameInoutIsValid ? "form-control invalid": "form-control"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input           
          type='text' id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInoutBlurHandler}
        />
        <p className="error-text">{nameInoutIsValid && "Your input is invalid"}</p>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
