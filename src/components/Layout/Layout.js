import React, {Fragment,useState} from 'react';
import Cart from '../Cart/Cart';

import classes from './Layout.module.css';

import Header from './Header/Header';

const Layout = (props) =>{
    const [cartIsShown,setCartIsShown] = useState(false); 

    const hideCartHandler = () => {
     setCartIsShown(false);
   }
    const showCartHandler = () => {
    setCartIsShown(true);
  }
  return (
      <Fragment>
       {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onOpened={showCartHandler}/>
          <main className={classes.main}>
              {props.children}
          </main>
        </Fragment>
    )
}

export default Layout;
