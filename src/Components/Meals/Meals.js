import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";
import AddNewMeals from "./AddNewMeals";

const Meals = () => {
  return (
    <section className={classes.meals}>
      <MealsSummary />
      {/* <AddNewMeals /> */}
      <AvailableMeals />
    </section>
  );
};

export default Meals;
