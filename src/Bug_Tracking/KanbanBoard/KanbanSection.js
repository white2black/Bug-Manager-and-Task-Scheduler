import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import { firebase } from '../../firebase';

import Grid from '@material-ui/core/Grid';
const Container = styled.div`
  display: flex;
`;

export const KanbanSection = () => {

  const [state, setState] = useState({
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
  });

  const getData = async () => {
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

      for (let i = 0; i < allIssues.length; i++) {
  
      
        tasks = { ...tasks, [allIssues[i].id]: allIssues[i] };
    
      }


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
 

      Object.keys(tasks).map((key, index) => {

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
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={3}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Grid>
    </DragDropContext>
  );
};
