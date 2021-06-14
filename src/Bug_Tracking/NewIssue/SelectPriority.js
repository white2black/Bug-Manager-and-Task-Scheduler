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
import { Priority } from '../../Objects/Priority';

import { Height } from '@material-ui/icons';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';

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

export default function SelectPriority({ info, setInfo }) {
  const classes = useStyles();
  const [priority, setPriority] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPriority(event.target.value);
    setInfo({ ...info, priority: event.target.value });
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
        <InputLabel id="demo-controlled-open-select-label">Priority</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={priority}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {Object.keys(Priority).map((key, index) => {
            return (
              <MenuItem value={key}>
                <Grid container direction="row" alignItems="center">
                  {Priority[key].icon}
                  {Priority[key].name}
                </Grid>
              </MenuItem>
            );
          })}
          {/* <MenuItem value={10}>
            <Grid container direction="row" alignItems="center">
              <ArrowUpwardRounded style={{ color: 'red' }} />
              Highest
            </Grid>
          </MenuItem>
          <MenuItem value={20}>
            <Grid container direction="row" alignItems="center">
              <ArrowUpwardRounded style={{ color: 'orange' }} />
              High
            </Grid>
          </MenuItem>
          <MenuItem value={30}>
            <Grid container direction="row" alignItems="center">
              <Height style={{ color: 'yellow' }} />
              Medium
            </Grid>
          </MenuItem>
          <MenuItem value={40}>
            <Grid container direction="row" alignItems="center">
              <ArrowDownwardRounded style={{ color: 'lightgreen' }} />
              Low
            </Grid>
          </MenuItem>
          <MenuItem value={50}>
            <Grid container direction="row" alignItems="center">
              <ArrowDownwardRounded style={{ color: 'darkgreen' }} />
              Lowest
            </Grid>
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
