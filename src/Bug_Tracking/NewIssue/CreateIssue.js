import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SelectPriority from './SelectPriority';
import BasicTextFields from './ShortSum';
import SelectIssue from './SelectIssue';
import SelectAssignee from './SelectAssignee';
import SelectReporter from './SelectReporter';
import AddDescription from './AddDescription';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { firebase } from '../../firebase';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 60; // + rand();
  const left = 60; // + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    // height: 'auto',
    // overflow: 'scroll',
  };
}

const useStylesModal = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    // height: 'auto',
    height: '90%',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    'overflow-y': 'scroll',
  },
}));

export const CreateIssue = ({ handleCloseModal }) => {
  const classesModal = useStylesModal();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [info, setInfo] = React.useState({
    issueType: '',
    shortSummary: '',
    description: '',
    priority: '',
    reporter: '',
    assignee: [],
  });

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit === true) {
      firebase
        .firestore()
        .collection('issues')
        .add({
          ...info,
          userId: 'jlIFXIwyAL3tzHMtzRbw',
        });

      console.log('useEffect', submit, info);

      handleCloseModal();
    }
  }, [submit]);

  useEffect(() => {
    console.log('CreateIssue.js useEffect Info:', info);
  });

  return (
    <div style={modalStyle} className={classesModal.paper}>
      <div>
        <h1>Create New Issue</h1>
        <h3>Issue Type</h3>
        <SelectIssue info={info} setInfo={setInfo} />
        {/*       */}
        <h3>Short Summary</h3>
        <BasicTextFields info={info} setInfo={setInfo} />
        <h3>Description</h3>
        <AddDescription info={info} setInfo={setInfo} />
        <h3>Select the Priority</h3>
        <SelectPriority info={info} setInfo={setInfo} />
        <h3>Select Reporter</h3>
        <SelectReporter info={info} setInfo={setInfo} />
        <h3>Select Assignee</h3>
        <SelectAssignee info={info} setInfo={setInfo} />
        <SubmitButton
          submit={submit}
          setSubmit={setSubmit}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};
export default CreateIssue;
