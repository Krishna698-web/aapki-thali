import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value !== "";
const isSixChars = (value) => value.length === 6;
const isMobileNumber = (value) => value.length === 10;

const Checkout = ({ onCancel }) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    pincode: true,
    mobile: true,
  });
  const nameRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();
  const mobileRef = useRef();

  const submitCheckoutFormHandler = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const addressValue = addressRef.current.value;
    const pincodeValue = pincodeRef.current.value;
    const mobileValue = mobileRef.current.value;

    const nameIsValid = isEmpty(nameValue);
    const addressIsValid = isEmpty(addressValue);
    const pincodeIsValid = isSixChars(pincodeValue);
    const mobileIsValid = isMobileNumber(mobileValue);

    setFormValidity({
      name: nameIsValid,
      address: addressIsValid,
      mobile: mobileIsValid,
      pincode: pincodeIsValid,
    });

    let formIsValid =
      nameIsValid && addressIsValid && pincodeIsValid && mobileIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form onSubmit={submitCheckoutFormHandler}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameRef} id="name" />
        {!formValidity.name && (
          <p className={styles.error}>Please enter name.</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="address">Address</label>
        <input type="text" ref={addressRef} id="address" />
        {!formValidity.address && (
          <p className={styles.error}>Please enter address.</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="pin">Pincode</label>
        <input type="text" ref={pincodeRef} id="name" />
        {!formValidity.pincode && (
          <p className={styles.error}>Please enter valid pincode.</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="mobile">Mobile</label>
        <input type="tel" ref={mobileRef} id="mobile" />
        {!formValidity.mobile && (
          <p className={styles.error}>Please enter valid number.</p>
        )}
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
