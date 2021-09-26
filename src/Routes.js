import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
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
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/img" component={ImageUpload} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
