import { useRef, useState } from "react";

const SimpleInput = (props) => {
const [enteredName, setEnteredName]=useState("");
const nameInputRef=useRef();
const [enteredNameIsValid, setEnteredNameIsValid]=useState(false);
const [enteredNameTouched, setenteredNameTouched]=useState(false);

//reads input on every change
const nameInputChangeHandler=(event)=>{
  setEnteredName(event.target.value);
}

const nameInoutBlurHandler=(event)=>{
  enteredNameTouched(true);
  
  if(enteredName.trim()!==''){
    setEnteredNameIsValid(true);    
  }
  
}

const formSubmissionHandler=(event)=>{
  event.preventDefault();
  setenteredNameTouched(true);
  if(enteredName.trim()===''){
    setEnteredNameIsValid(false);
    
  }
  setEnteredNameIsValid(true);
  console.log(enteredName);
  //reads value once
  const enteredValue=nameInputRef.current.value;
  console.log(enteredValue);
}
  const nameInoutIsValid=enteredNameIsValid&&enteredNameTouched;
  const nameInputClasses=nameInoutIsValid ? "form-control invalid": "form-control"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef}
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
