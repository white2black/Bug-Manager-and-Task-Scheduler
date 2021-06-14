import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import IssueCard from './IssueCard';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

export const Task = (props) => {
  console.log('props.task', props.task);
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <IssueCard content={props.task}></IssueCard>
        </Container>
      )}
    </Draggable>
  );
};
export default Task;
