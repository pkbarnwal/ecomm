import React from 'react';

import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';
import Burger from '../../assets/images/burger.jpeg';
import Coke from '../../assets/images/coke.jpeg';
import  Fries from '../../assets/images/fries.jpeg';
import Pepsi from '../../assets/images/pepsi.jpeg'
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
    {id:'p1', title:'Hamburger',price:200,imageUrl:Burger},
    {id:'p2', title:'Fries',price:100, imageUrl:Fries}, 
    {id:'p3', title:'Coke',price:60,imageUrl:Coke},
    {id:'p4', title:'Pepsi',price:50,imageUrl:Pepsi},
   ];

const Products =() =>{
   const productList = DUMMY_PRODUCT.map(product => 
             <Card >
               <ProductItem id={product.id}
                            key={product.id} 
                            name={product.title} 
                            price={product.price}
                            url={product.imageUrl}   
                          />
                          </Card>)
          return (
             <div className={classes.productCard}>
                  {productList}
                 
            </div>
        );
}

export default Products;