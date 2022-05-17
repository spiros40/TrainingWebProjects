import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './Input.css';

const Input = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'invalid':''}`}>
        {/*A way to change style is to writed inline
         <label style={{color:'red'}}>Goal</label> 
        <label style={{color: !isValid? 'red':'black'}}>Goal</label>
        <input style={{borderColor: !isValid? 'red':'black', backgroundColor:!isValid? 'salmon':'transparent'}} 
        type="text" onChange={goalInputChangeHandler} />*/}
        <label>Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default Input;