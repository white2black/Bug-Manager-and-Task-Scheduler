import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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

export default function SelectReporter({ info, setInfo }) {
  const classes = useStyles();
  const [reporter, setReporter] = React.useState(info.reporter);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setReporter(event.target.value);
    // console.log('handleChange age', repo);
    setInfo({ ...info, reporter: event.target.value });
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
        <InputLabel id="demo-controlled-open-select-label">Reporter</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={reporter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>
            <Grid container direction="row" alignItems="center">
              <Avatar src="https://www.w3schools.com/html/img_girl.jpg" />
              Task
              {/* {functionName} */}
            </Grid>
          </MenuItem>
          <MenuItem value={20}>
            <Grid container direction="row" alignItems="center">
              <Avatar src="https://www.w3schools.com/html/img_girl.jpg" />
              Bug
            </Grid>
          </MenuItem>
          <MenuItem value={30}>
            <Grid container direction="row" alignItems="center">
              <Avatar src="https://www.w3schools.com/html/img_girl.jpg" />
              Story
            </Grid>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
