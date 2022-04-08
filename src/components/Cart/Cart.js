import React,{ useContext, useState} from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from '../Cart/CartItem';
import Checkout from '../Cart/Checkout';

const Cart =(props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  // const history = useHistory();
  const cartCtx = useContext(cartContext);
  const toAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
 

  const cartItemRemoveHandler =( id ) =>{
      cartCtx.removeItem(id);
  }   
  const cartItemAddHandler=(item) =>{
     cartCtx.addItem({...item,amount:1});
  }

  const orderHandler =() =>{
      // props.onClose();
      // history.replace('/checkout');
    setIsCheckout(true);
   }
  const submitOrderHandler = async (userData) =>{
      setIsSubmitting(true);
     await fetch('https://burgerbuilder-6ff29.firebaseio.com/order.json',{
        method:'POST',
        body:JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        })
  });
  setIsSubmitting(false);
  setDidSubmit(true);
  cartCtx.clearCart();
}
      const cartItems=(<ul className={classes['cart-items']}>
      {cartCtx.items.map((item)=>(
      /* {[{id:'c1', name:'sushi', amount:2,price:12.99}].map((item)=>( */
         <CartItem  key={item.id}
                    id={item.id} 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onRemove={cartItemRemoveHandler.bind(null,item.id)} 
                    onAdd ={cartItemAddHandler.bind(null,item)} 
                    />
         ))}
          </ul>)

    const modalAction = 
              <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>

    const cartModalContent = <React.Fragment>
          {cartItems}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>{toAmount}</span>
            </div>
         { isCheckout && <Checkout onConfirm ={submitOrderHandler} onCancel={props.onClose}/> }
         {!isCheckout && modalAction}

    </React.Fragment>

    const isubmittingModalContent = <p>Sending order Data</p>;

    const didSubmittingModalContent = 
          <React.Fragment>
             <p>Successfully sent the order</p>
             <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
             </div>
          </React.Fragment>
   
   return(
        <Modal onClose={props.click}>
          {!isubmitting && !didSubmit &&  cartModalContent}
          {isubmitting && isubmittingModalContent}
          {!isubmitting && didSubmit && didSubmittingModalContent }
        </Modal>
         
    );
}

export default Cart;