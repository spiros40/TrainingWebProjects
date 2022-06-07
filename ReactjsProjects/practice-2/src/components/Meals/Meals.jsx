import React from "react";
import MealSummary from './MealSummary';
import AvailableMeals from "./AvailableMeals";
import Card from '../UI/Card';

const Meals=()=>{
    return(
        <React.Fragment>
            <MealSummary/>
            <Card>
                <AvailableMeals/>                
            </Card>
        </React.Fragment>
    );
}

export default Meals;