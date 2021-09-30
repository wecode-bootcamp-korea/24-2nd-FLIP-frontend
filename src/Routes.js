import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import AddProduct from './pages/AddProduct/AddProduct';
import ImageUpload from './pages/AddProduct/ImageUpload';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product/:productid" component={ProductDetail} />
          <Route exact path="/product-list/:listid" component={ProductList} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/img" component={ImageUpload} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
