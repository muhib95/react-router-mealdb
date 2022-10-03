import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
  const {meals}=useLoaderData();
  console.log(meals);
  
  return (
    <div>
      This is Mealsdb
      <div className='meals'>
      {
        meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
      }
      </div>
    
    </div>
  );
};

export default Meals;