import React, { useEffect } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../hooks/use-http";

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
  const { sendRequest } = useHttp();
  async function fetchData() {
    try {
      // const data = sendRequest({
      //   url: "https://aapkithali-df247-default-rtdb.firebaseio.com/meals.json",
      // });
      const response = await fetch(
        "https://aapkithali-df247-default-rtdb.firebaseio.com/meals.json"
      );

      const data = await response.json();
      console.log(data);

      let loadedMeals = [];

      for (let key in data) {
        loadedMeals.push(data[key]);
      }
      console.log(loadedMeals);
      console.log(data);

      for (let obj of loadedMeals) {
        DUMMY_MEALS.push(obj);
      }

      console.log(DUMMY_MEALS);
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  return <ul className={classes.list}>{cartItems}</ul>;
};

export default AvailableMeals;
