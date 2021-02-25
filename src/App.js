import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Product from './components/Product';
import Category from './components/category/Category';
import Order from './components/order/Order';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container maxWidth="sm">
          <Typography
            component="div">
            <ul>
              <li>
                <Link to="/category">Category</Link>
              </li>

              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
            </ul>

            <Switch>
                <Route path="/product">
                  <Product />
                </Route>

                <Route path="/category">
                  <Category />
                </Route>

                <Route path="/order">
                  <Order />
                </Route>
              </Switch>
            </Typography>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
