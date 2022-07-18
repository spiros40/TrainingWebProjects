
import useInput from "../hooks/user-input";

const SimpleInput = (props) => {
  const {
    value:enteredName,
    isvalid:enteredNameIsValid,
    hasError:nameInputHasError, 
    valueChangeHandler:nameChangeHandler, 
    inputBlurHandler:nameBlurHandler, 
    reset:resetNameInput
  }=useInput(value=>value.trim()!=='');//passing a function as a value to another function
  //here the function initialized and runs inside of the hook

  const {
    value:enteredEmail,
    isvalid:enteredEmailIsValid,
    hasError:emailInputHasError, 
    valueChangeHandler:emailChangeHandler, 
    inputBlurHandler:emailBlurHandler, 
    reset:resetEmailInput
  }=useInput(valueEmail=>valueEmail.includes("@"));
  
let formIsValid=false;

if(enteredNameIsValid && enteredEmailIsValid){
  formIsValid=true;
}

const formSubmissionHandler=(event)=>{
  event.preventDefault();    
  if(!enteredNameIsValid){
     return;
  }
  if(!enteredEmailIsValid){
    return;
 }
  resetNameInput();
  resetEmailInput();
}

  const nameInputClasses=nameInputHasError ? "form-control invalid": "form-control"
  const emailInputClasses=emailInputHasError ? "form-control invalid": "form-control"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input         
          type='text' id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        </div>
        <p className="error-text">
        {nameInputHasError && "Your input is invalid"}</p>

        <div className={emailInputClasses}>
          <label htmlFor='email'>Your Email</label>
          <input         
            type='email' id='email' 
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <p className="error-text">{enteredEmail && "Your email is invalid"}</p>
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
