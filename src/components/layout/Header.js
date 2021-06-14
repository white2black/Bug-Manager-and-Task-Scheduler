import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { AddTask } from '../AddTask';
import { MdInput } from 'react-icons/md';
import { IconName } from 'react-icons/fc';
import { Redirect } from 'react-router-dom';
// import { Link } from "react/jsx-no-undef";
import { Link } from 'react-router-dom';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  if (user && user.isLogin === true) {
    return (
      <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="Todoist" />
          </div>
          <div className="settings">
            <ul>
              <li className="settings__add">
                <button
                  data-testid="quick-add-task-action"
                  aria-label="Quick add task"
                  type="button"
                  onClick={() => {
                    setShowQuickAddTask(true);
                    setShouldShowMain(true);
                  }}
                >
                  +
                </button>
              </li>
              <li className="settings__darkmode">
                <button
                  data-testid="dark-mode-action"
                  aria-label="Darkmode on/off"
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <FaPizzaSlice />
                </button>
              </li>
              <li className="settings__darkmode">
                <button
                  onClick={() => {
                    sessionStorage.removeItem('user');
                    sessionStorage.clear();
                    setUser(undefined);
                    console.log('Header/logout button');
                    // window.location.reload(false);
                    //window.location.reload(false);
                  }}
                >
                  <MdInput />
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <AddTask
          showAddTaskMain={false}
          shouldShowMain={shouldShowMain}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      </header>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
