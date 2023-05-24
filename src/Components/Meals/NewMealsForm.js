import React from "react";
import Modal from "../UI/Modal";
import styles from "./AddNewMeals.module.css";
import useMealsInput from "../hooks/use-Input";
import Button from "../UI/Button";
import useHttp from "../hooks/use-http";

const NewMealsForm = ({ onShowForm }) => {
  const { sendRequest } = useHttp();
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

  let formIsValid = false;

  if (mealNameIsValid && mealPriceIsValid && mealDescriptionIsValid) {
    formIsValid = true;
  }

  function addNewMealsHandler(e) {
    e.preventDefault();

    const aboutMeal = {
      name: mealName,
      price: mealPrice,
      description: mealDescription,
      id: Math.random(),
    };

    // console.log(aboutMeal);
    try {
      const data = sendRequest({
        url: "https://aapkithali-df247-default-rtdb.firebaseio.com/meals.json",
        method: "POST",
        body: aboutMeal,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);
      onShowForm(false);
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }

    resetMealName();
    resetMealPrice();
    resetMealDescription();
  }

  return (
    <Modal onClose={() => onShowForm(false)}>
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
  );
};

export default NewMealsForm;
