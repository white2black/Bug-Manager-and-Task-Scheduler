import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
      height: '10%',
    },
  },
}));

export default function BasicTextFields({ info, setInfo }) {
  const classes = useStyles();

  const [shortSummary, setShortSummary] = useState(info.shortSummary);

  const handleChange = (e) => {
    setShortSummary(e.target.value);
    setInfo({ ...info, shortSummary });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Issue Name"
        variant="outlined"
        value={shortSummary}
        onChange={handleChange}
      />
    </form>
  );
}
