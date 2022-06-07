import React from "react";
import styles from './AvailableMeals.module.css';
import Input from "../UI/Input";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{
    return(
      DUMMY_MEALS.map((element)=>{
       return (
        <div className={styles.meals}>
          <ul key={element.id}>
            key={element.id}
            name={element.name}
            description={element.description}
            price={element.price}
            <Input id={element.id}/>
          </ul>
        </div>
      )})
    );
}

export default AvailableMeals;