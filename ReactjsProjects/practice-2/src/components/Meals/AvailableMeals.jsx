import React from "react";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem/MealItem";

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
    
  const dummyMeals = DUMMY_MEALS.map((element)=>{
    return (
      <MealItem         
          key={element.id}
          name={element.name}
          description={element.description}
          price={element.price}                      
      />
    )})
    return(      
      <section className={styles.meals}>
          <ul>
            {dummyMeals}
          </ul>
        </section>
    );
}

export default AvailableMeals;