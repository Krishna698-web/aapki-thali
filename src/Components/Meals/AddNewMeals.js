import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import userEvent from "@testing-library/user-event";
import Modal from "../UI/Modal";
import useMealsInput from "../hooks/use-mealsInput";
import NewMealsForm from "./NewMealsForm";

const AddNewMeals = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Add New Meals...</h1>
      <Button onClick={() => setShowForm(true)}>Add</Button>
      {showForm && <NewMealsForm />}
    </div>
  );
};

export default AddNewMeals;
