import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

const LoginDetails = () => {
  let user = JSON.parse(sessionStorage.getItem('user'));

  return user && user.isLogin === true;
};

export default LoginDetails;
