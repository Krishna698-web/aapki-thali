import React, { useRef } from 'react'
import Input from '../../../store/Input';
import Button from '../../UI/Button'

const MealItemForm = (props) => {

  const formRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = formRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    
    props.onAddToCart(enteredAmountToNumber);
  }

  return (
    <form onSubmit={submitHandler}>
        <Input
          ref={formRef}
          input={{
            id: props.id,
            min: "1",
            max: "5",
            type: 'number',
            step: '1',
            defaultValue: "1",
          }} />
      <Button>+ Add</Button>
    </form>
  )
}

export default MealItemForm;