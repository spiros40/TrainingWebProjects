import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './Input.module.css';

/*styled-components lybrary
import styled from 'styled-components';
const FormControl=styled.div`
    margin: 0.5rem;
    
  &label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color:${props => props.invalid ? 'red':'black'};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props=> props.invalid ? 'salmon':'#ccc'};
    backgroundColor:${props => props.invalid ? 'salmon':'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;*/

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
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* i can use this className={!isValid && 'invalid'} or the down code */}
      {/* <FormControl invalid={!isValid}> */}
        {/*A way to change style is to writed inline
         <label style={{color:'red'}}>Goal</label> 
        <label style={{color: !isValid? 'red':'black'}}>Goal</label>
        <input style={{borderColor: !isValid? 'red':'black', backgroundColor:!isValid? 'salmon':'transparent'}} 
        type="text" onChange={goalInputChangeHandler} />*/}
        <label>Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default Input;