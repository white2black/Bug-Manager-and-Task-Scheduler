import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Contact from '../Bug_Tracking';
import Login from '../login_signup';
import Home from '../Home';
import SignUp from '../login_signup/signup';

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/loginRegister" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </>
  );
};
export default Router;
