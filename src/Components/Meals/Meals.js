import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary';
import classes from './Meals.module.css';

const Meals = () => {
  return (
    <section className={classes.meals}>
        <MealsSummary />
        <AvailableMeals />
    </section>
  )
}

export default Meals