import { firebase } from '../../firebase';
import React from 'react';

export const initialData = async ({ setState }) => {
  let tasks = {};
  let columns = {};

  let fire = firebase
    .firestore()
    .collection('issues')
    .where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw');

  await fire.onSnapshot((snapshot) => {
    const allIssues = snapshot.docs.map((issue) => ({
      ...issue.data(),
      id: issue.id,
    }));

    console.log(allIssues, 'initial-data.');

    for (let i = 0; i < allIssues.length; i++) {
      //console.log(allIssues[i] + '  ' + i);
      // tasks.allIssues[i].docId = allIssues[i];
      tasks = { ...tasks, [allIssues[i].id]: allIssues[i] };
      // object.key='value'
    }

    //console.log(tasks);

    columns = {
      'column-1': {
        id: 'column-1',
        title: 'BACKLOG',
        taskIds: [],
      },
      'column-2': {
        id: 'column-2',
        title: 'FOR DEVELOPMENT',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'IN PROGRESS',
        taskIds: [],
      },
      'column-4': {
        id: 'column-4',
        title: 'COMPLETED',
        taskIds: [],
      },
    };
    //   let key = 'column-1';
    //   console.log('this is column key', columns['column-1']);

    console.log('tasks', tasks);

    Object.keys(tasks).map((key, index) => {
      //console.log('In Loop', tasks[key].progress);

      if (tasks[key].progress === 'backlog') {
        columns['column-1'].taskIds = [
          ...columns['column-1'].taskIds,
          tasks[key].id,
        ];
      } else if (tasks[key].progress === 'development') {
        columns['column-2'].taskIds = [
          ...columns['column-2'].taskIds,
          tasks[key].id,
        ];
      } else if (tasks[key].progress === 'progress') {
        columns['column-3'].taskIds = [
          ...columns['column-3'].taskIds,
          tasks[key].id,
        ];
      } else {
        columns['column-4'].taskIds = [
          ...columns['column-4'].taskIds,
          tasks[key].id,
        ];
      }
    });

    setState({
      tasks: { ...tasks },
      columns: { ...columns },
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    });

    //console.log('this is column key 76 ', columns);
  });

  setState({
    tasks: { ...tasks },
    columns: { ...columns },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  });

    return {
      tasks: { ...tasks },
      columns: { ...columns },
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    };

    return {
      tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
      },
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'BACKLOG',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
          id: 'column-2',
          title: 'FOR DEVELOPMENT',
          taskIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'IN PROGRESS',
          taskIds: [],
        },
        'column-4': {
          id: 'column-4',
          title: 'COMPLETED',
          taskIds: [],
        },
      },
      // Facilitate reordering of the columns
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    };
};

export default initialData;
