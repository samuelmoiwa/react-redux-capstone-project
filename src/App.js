import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import './App.css';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Page Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
