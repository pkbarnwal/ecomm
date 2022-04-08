import React,{ useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChar = (value) => value.trim().length === 5

const Checkout = (props) =>{
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true 
  });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

const submitDataHandler = (event) =>{
       event.preventDefault();
       const enteredName = nameInputRef.current.value;
       const enteredStreet = streetInputRef.current.value;
       const enteredPostal =postalInputRef.current.value;
       const enteredCity = cityInputRef.current.value;

       const enteredNameIsValid = !isEmpty(enteredName)
       const enteredStreetIsValid = !isEmpty(enteredStreet)
       const enteredCityIsValid = !isEmpty(enteredCity)
       const enteredpostalIsValid = isFiveChar(enteredPostal)

       setFormIsValid({
         name: enteredNameIsValid,
         street: enteredStreetIsValid,
         city: enteredCityIsValid,
         postalCode: enteredpostalIsValid,
       })
      
      //  const formValidity = 
      //         enteredNameIsValid && 
      //         enteredStreetIsValid && 
      //         enteredCityIsValid && 
      //         enteredpostalIsValid;

          if(!formIsValid){
                  return
              }
              props.onConfirm({
                name: enteredName ,
                street: enteredStreet ,
                city: enteredCity ,
                postalCode:  enteredPostal,
              });
  };

  const nameControlClasses =`${ classes.control} 
               ${ formIsValid.name ? '' : classes.invalid}`
  const streetControlClasses =`${ classes.control} 
               ${ formIsValid.street ? '' : classes.invalid}`
  const cityControlClasses =`${ classes.control} 
               ${ formIsValid.city ? '' : classes.invalid}`
  const postalControlClasses = `${ classes.control} 
                    ${ formIsValid.postalCode ? '' : classes.invalid}`
  return(
     <form className={classes.form} onSubmit={submitDataHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id='name' ref={nameInputRef }/>
          {!formIsValid.name && <p>Please Enter a valid name</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="name">Street</label>
          <input type="text" id='street' ref={streetInputRef}/>
          {!formIsValid.street && <p>Please Enter a valid Street</p>}
        </div>
        <div className={postalControlClasses}>
          <label htmlFor="name">Postal Code</label>
          <input type="text" id='postal' ref={postalInputRef}/>
          {!formIsValid.postalCode && <p>Please Enter a valid postalCode</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="name">City</label>
          <input type="text" id='city' ref={cityInputRef }/>
          {!formIsValid.city && <p>Please Enter a valid City</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
        </div>
      </form>
   );
}

export default Checkout;