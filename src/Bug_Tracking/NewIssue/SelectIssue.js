import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import BugReportIcon from '@material-ui/icons/BugReport';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { EmojiObjects } from '@material-ui/icons';
import { IssueType } from '../../Objects/IssueType';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
}));

export default function SelectIssue({ info, setInfo }) {
  const classes = useStyles();
  const [issueType, setIssueType] = React.useState(info.issueType);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setIssueType(event.target.value);
    console.log('SelectIssue.js handleChange ', event.target);
    // setIssueType(event.target.value);
    setInfo({ ...info, issueType: event.target.value });
    console.log('the value of issueType', issueType);
    // console.log('handleChange', issueType, setInfo, info);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Issue Type
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={issueType}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {Object.keys(IssueType).map((key, index) => {
            return (
              <MenuItem value={key}>
                <Grid container direction="row" alignItems="center">
                  {IssueType[key].icon}
                  {IssueType[key].name}
                </Grid>
              </MenuItem>
            );
          })}
          {/* <MenuItem value={10}>
            <Grid container direction="row" alignItems="center">
              <CheckCircleIcon color="primary" />
              Task
            </Grid>
          </MenuItem> */}
          {/* <MenuItem value={20}>
            <Grid container direction="row" alignItems="center">
              <BugReportIcon style={{ color: 'red' }} />
              Bug
            </Grid>
          </MenuItem> */}
          {/* <MenuItem value={30}>
            <Grid container direction="row" alignItems="center">
              <BookmarkIcon style={{ color: 'green' }} />
              Story
            </Grid>
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
