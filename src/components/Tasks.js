import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import Contact from '../Bug_Tracking';
import { Redirect } from 'react-router-dom';
//import {Route, Link} from "react-router-dom";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }
  //console.log(projects);
  //console.log(selectedProject);
  //console.log(projectName);
  //console.log(projectName);
  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    //Commented due to error
    try {
      projectName = getTitle(projects, selectedProject).name;
      //console.log(projectName);
    } catch (error) {
      //console.log(error, selectedProject, projects);
    }
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  if (
    projectName === 'Inbox' ||
    projectName === 'Today' ||
    projectName === 'Next 7 Days'
  ) {
    return (
      <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{projectName}</h2>

        <ul className="tasks__list">
          {tasks.map((task) => {
            return (
              <li key={`${task.id}`}>
                <Checkbox id={task.id} taskDesc={task.task} />
                <span>{task.task}</span>
              </li>
            );
          })}
        </ul>
        <AddTask />
      </div>
    );
  } else {
    console.log('components/Tasks.js');
    sessionStorage.setItem('projectName', projectName);
    return <Redirect to="/contact" />;
    //<Contact/>
  }
};
