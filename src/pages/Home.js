import React from 'react';
import { Link} from 'react-router-dom';

import classes from './Home.module.css';


const Home = () =>{
   return (
       <div className={classes.content}>
          <h1 >Welcome to Food's</h1>
           <h2 className={classes.lowerContent}>Kitchen</h2>
           <Link to='/products'>
               <button className={classes.button} >Go To Menu</button>
           </Link>
          </div>
   ); 
}
export default Home;