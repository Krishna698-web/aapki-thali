import React from "react";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    name: "Paneer Butter Masala",
    description: "Combination of delicious Masalas and paneer",
    price: 59,
    id: "m1",
  },
  {
    name: "Dal Makhni",
    description: "Sicy and delicious pulses with homemade masalas.",
    price: 39,
    id: "m2",
  },
  {
    name: "Dhum Aloo",
    description: "Fully masala coated Aloo",
    price: 29,
    id: "m3",
  },
  {
    name: "Kulcha",
    description: "A greate combination with your veggies.",
    price: 5,
    id: "m4",
  },
  {
    name: "Gulab Jamun",
    description: "4 pecies of delicious indian desert.",
    price: 49,
    id: "m5",
  },
];


const AvailableMeals = () => {

    const cartItems = DUMMY_MEALS.map((item) => (
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
      <ul className={classes.list}>{cartItems}</ul>
  );
};

export default AvailableMeals;
