import React from 'react';

import { Link} from 'react-router-dom';

import classes from './Checkout.module.css';

const Checkout= () =>{
    return (
        <>
        <h1> Thank you for Ordering</h1>
        <Link to="/home">
          <button className={classes.button}>Go To Home</button>
        </Link>
        </>
    )

}
export default Checkout;