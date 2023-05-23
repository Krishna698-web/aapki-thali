import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import userEvent from "@testing-library/user-event";
import Modal from "../UI/Modal";
import useMealsInput from "../hooks/use-mealsInput";
import styles from "./AddNewMeals.module.css";

const AddNewMeals = () => {
  const [showForm, setShowForm] = useState(false);

  const {
    value: mealName,
    isValid: mealNameIsValid,
    hasError: mealNameHasError,
    inputHandler: mealNameInputHandler,
    inputBlurHandler: mealNameBlurHandler,
    reset: resetMealName,
  } = useMealsInput((value) => value.trim() !== "");

  const {
    value: mealPrice,
    isValid: mealPriceIsValid,
    hasError: mealPriceHasError,
    inputHandler: mealPriceInputHandler,
    inputBlurHandler: mealPriceBlurHandler,
    reset: resetMealPrice,
  } = useMealsInput((value) => value.trim() !== "");

  const {
    value: mealDescription,
    isValid: mealDescriptionIsValid,
    hasError: mealDescriptionHasError,
    inputHandler: mealDescriptionInputHandler,
    inputBlurHandler: mealDescriptionBlurHandler,
    reset: resetMealDescription,
  } = useMealsInput((value) => value.trim() !== "");

  const mealNameRef = useRef();
  const mealCostRef = useRef();
  const mealDescriptionRef = useRef();

  let formIsValid = false;

  if (mealNameIsValid && mealPriceIsValid && mealDescriptionIsValid) {
    formIsValid = true;
  }

  async function addNewMealsHandler(e) {
    e.preventDefault();

    const aboutMeal = {
      name: mealNameRef.current.value,
      price: mealCostRef.current.value,
      description: mealDescriptionRef.current.value,
    };

    // console.log(aboutMeal);
    try {
      const response = await fetch(
        "https://aapkithali-df247-default-rtdb.firebaseio.com/meals.json",
        {
          method: "POST",
          body: JSON.stringify(aboutMeal),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }

    resetMealName();
    resetMealPrice();
    resetMealDescription();
  }

  return (
    <div>
      <h1>Add New Meals...</h1>
      <Button onClick={() => setShowForm(true)}>Add</Button>
      {showForm && (
        <Modal>
          <form onSubmit={addNewMealsHandler}>
            <h2>Add your Meal</h2>
            <div className="field">
              <label>Meal name</label>
              <input
                value={mealName}
                onChange={mealNameInputHandler}
                onBlur={mealNameBlurHandler}
                type="text"
              />
              {mealNameHasError && (
                <p className={styles.text_error}>Please enter a name.</p>
              )}
            </div>
            <div className="field">
              <label>Meal cost</label>
              <input
                value={mealPrice}
                onChange={mealPriceInputHandler}
                onBlur={mealPriceBlurHandler}
                type="number"
              />
              {mealPriceHasError && (
                <p className={styles.text_error}>Please enter a name.</p>
              )}
            </div>
            <div className="field">
              <label>About meal</label>
              <input
                value={mealDescription}
                onChange={mealDescriptionInputHandler}
                onBlur={mealDescriptionBlurHandler}
                type="text"
              />
              {mealDescriptionHasError && (
                <p className={styles.text_error}>Please enter a name.</p>
              )}
            </div>
            <Button type="submit" disabled={!formIsValid}>
              Add Meal
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default AddNewMeals;
