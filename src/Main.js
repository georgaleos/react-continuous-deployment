import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Roster from './Roster';
import Home from './Home';
import Schedule from './Schedule';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import LoginForm from './LoginForm';
import WizardForm from './WizardForm';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/products/form" component={ProductForm} />
          <Route path="/products" component={ProductList} />
          <Route
            path="/login"
            render={() => <LoginForm email={'george@elefth.com'} />}
          />
          <Route path="/wizard" component={WizardForm} />
        </Switch>
      </main>
    );
  }
}

export default Main;
