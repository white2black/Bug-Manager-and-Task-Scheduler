import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Contact from './Bug_Tracking';
import Login from './login_signup';
import Home from './Home';
import SignUp from './login_signup/signup';
// import Router from './router';

export const App = ({ darkModeDefault = false }) => {
  //function func();
  //{
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >
            <BrowserRouter>
              {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>
            </BrowserRouter>
          </main>
        </ProjectsProvider>
      </SelectedProjectProvider>
    </>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
