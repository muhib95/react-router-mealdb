import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'
const Meal = ({meal}) => {
  const {idMeal,strMeal,strMealThumb,strInstructions}=meal;
  console.log(meal);
  return (
    <div className='meal-item'>
<img src={strMealThumb} alt="" />
<h2>{strMeal}</h2>
<p>{strInstructions.slice(0,200)}</p>  
<Link to={`/meal/${idMeal}`}>{idMeal}</Link>
    </div>
  );
};

export default Meal;