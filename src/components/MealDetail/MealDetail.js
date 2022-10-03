import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './MealDetail.css'

const MealDetail = () => {
  const detail=useLoaderData();
 
  const {meals}=detail;
  console.log(meals[0]);
  return (
    <div className='meal'>
      <h2>Meal Details</h2>
      <div className='meal-detail'>
      <img src={meals[0].strMealThumb} alt="" />
      <h2>Name:{meals[0].strMeal}</h2>
      </div>
      
    </div>
  );
};

export default MealDetail;