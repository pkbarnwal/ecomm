import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import Layout from '../src/components/Layout/Layout';

import CartProvider from './store/cart-provider';
function App() {
  return (
    <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" exact >
                <Redirect to="/home"/>
              </Route>
              <Route path="/home" exact>
                <Home/>
             </Route>
             <Route path="/products" exact>
                <Products/>
             </Route>
             <Route path="/checkout" exact>
               <Checkout />
             </Route>
          </Switch>
        </Layout> 
     </CartProvider>
  );
}

export default App;
