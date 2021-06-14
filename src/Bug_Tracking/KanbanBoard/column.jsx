import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import Grid from '@material-ui/core/Grid';
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 335px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = (props) => {
    return (
          
        <Grid item xs={3}>
             <Title>{props.column.title} : {props.tasks.length}</Title>
            <Droppable droppableId={props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
          
        </Droppable>
        </Grid>
        
    );
}
export default Column;