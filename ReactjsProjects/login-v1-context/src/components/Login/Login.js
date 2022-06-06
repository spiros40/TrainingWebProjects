import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';

//it is legal to put this function out here, it gets everthing it needs
const emailReduser =(state, action)=>{
  if(action.type==='USER_INPUT'){
    return{value:action.val, isValid:action.val.includes('@')};
  }
  if(action.type==='INPUT_BLUR'){
    return{value:state.value, isValid:state.value.includes('@')};
  }
  return {
    value:'',
    isValid:false
  }
};

const passwordReduser=(state, action)=>{
  if(action.type==='USER_INPUT'){
    return{value:action.val, isValid:action.val.trim().length > 6};
  }
  if(action.type==='INPUT_BLUR'){
    return{value:state.value, isValid:state.value.trim().length > 6};
  }
  return {
    value:'',
    isValid:null
  }
};

const Login = (props) => {
  /*const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();*/
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, disPatchEmail]=useReducer(emailReduser,{value:'', isValid:false});
  const [passwordState, dispatchPassword]=useReducer(passwordReduser, {value:'', isValid:null});

  const authCtx=useContext(AuthContext);

  //object destructuring
  const {isValid:emailIsValid}=emailState;
  const {isValid:passwordIsValid}=passwordState;

  useEffect(()=>{
    //when user stops typing for some time then run the function
    const identifiier=setTimeout(()=>{
      setFormIsValid(
        emailIsValid && passwordIsValid); 
    },500);
    //it not run at first but before the main function runs
    return ()=>{
      //it clears the old timer before use the new
      clearTimeout(identifiier);
    };
  },[emailIsValid, passwordIsValid])
  
  const emailChangeHandler = (event) => {
    disPatchEmail({type:'USER_INPUT', val:event.target.value});

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});
  }
    /*setFormIsValid(
      passwordState.isValid && emailState.isValid
    );
  };*/

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    disPatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} 
          ${emailState.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
