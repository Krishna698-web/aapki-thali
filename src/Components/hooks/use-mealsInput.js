import { useState } from "react";

const useMealsInput = (validate) => {
  const [mealInput, setMealInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validate(mealInput);
  const hasError = !inputIsValid && isTouched;

  const inputHandler = (e) => {
    setMealInput(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setMealInput("");
    setIsTouched(false);
  };

  return {
    value: mealInput,
    isValid: inputIsValid,
    reset,
    hasError,
    inputHandler,
    inputBlurHandler,
  };
};

export default useMealsInput;
