import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SubmitButton({ submit, setSubmit, handleCloseModal }) {
  const classes = useStyles();

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <div className={classes.root}>
      <div>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
          spacing={2}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create Issue
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
