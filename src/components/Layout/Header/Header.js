import React, { Fragment} from 'react';

// import logoImage from '../../../assets/images/restaurant_24px.svg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'
import classes from './Header.module.css';

const Header =(props) => {
   return (
       <Fragment>
         <header className={classes.header}>
          <div className={classes.logo}>
                <h5>Food's Restaurant</h5>
          </div>
           <HeaderCartButton clicked={props.onOpened}/>
         </header>
      </Fragment>
      
   )

}

export default Header;