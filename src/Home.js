import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { Route, Link, Redirect } from 'react-router-dom';
import isLogin from './validation/LoginDetail';
import axios from 'axios';
import { Header } from './components/layout/Header';

export const Home = ({ darkModeDefault = false }) => {
  console.log('inside home.js');
  let user = JSON.parse(sessionStorage.getItem('user'));

  const [darkMode, setDarkMode] = useState(darkModeDefault);

  if (user && user.isLogin === true) {
    console.log('HOme', user);
    return (
      <>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Content />
      </>
    );
  } else {
    console.log('Home line 15');
    return <Redirect to="/login" />;
  }
};

export default Home;
