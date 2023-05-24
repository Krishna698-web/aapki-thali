import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../hooks/use-http";

const AvailableMeals = () => {
  const { sendRequest: fetchData, isLoading, error } = useHttp();
  const [meals, setMeals] = useState([]);

  const getMealsData = (mealsData) => {
    let loadedMeals = [];

    for (let key in mealsData) {
      loadedMeals.push({
        id: key,
        name: mealsData[key].name,
        description: mealsData[key].description,
        price: mealsData[key].price,
      });
    }

    setMeals(loadedMeals);
  };

  useEffect(() => {
    fetchData(
      {
        url: "https://aapkithali-df247-default-rtdb.firebaseio.com/meals.json",
      },
      getMealsData
    );
  }, []);

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }
  const cartItems = meals.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      label="Amount"
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <ul className={classes.list}>
      {isLoading ? <p>Loading...</p> : cartItems}
    </ul>
  );
};

export default AvailableMeals;
