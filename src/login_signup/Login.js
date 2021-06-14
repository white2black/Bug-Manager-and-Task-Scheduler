import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../Home';
import Signup, { SignUp } from './signup';
import { Redirect } from 'react-router-dom';
import { firebase } from '../firebase';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginDetails from '../validation';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const [render, setRender] = useState(false);

  const handleSubmit = async (e) => {
    //console.log('the event: ' + e);
    //console.log('login.js ', email, password);
    e.preventDefault();

    let users = {};

    firebase
      .firestore()
      .collection('users')
      .where('email', '==', email)
      .where('password', '==', password)
      .onSnapshot((snapshot) => {
        users = snapshot.docs.map((user) => ({
          ...user.data(),
        }));

        if (users && users[0]) {
          let user = JSON.parse(localStorage.getItem('user'));
          //console.log('/login.js/User - ', user);

          if (user === undefined) {
            user = { ...users[0], email, password, isLogin: true };
          } else {
            user = { ...users[0], email, password, isLogin: true };
          }

          // user = { ...users[0] };

          //console.log('line 65 Login.js', user);

          sessionStorage.setItem('user', JSON.stringify(user));

          setIsError(false);
          setError(false);
          setRender(true);
          setEmail('');
          setPassword('');
        } else {
          setIsError(true);
          setError('Email or Password not correct');
          setRender(false);
        }
      });

    return () => setEmail('');
  };

  const redirectSignUp = () => {
    return <SignUp />;
  };

  if (render === true) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {isError && (
            <Typography component="h3" variant="h5">
              {error}
            </Typography>
          )}
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // now edited
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              //now edited
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link href="/" variant="body2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                //now edited
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" onClick={redirectSignUp}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
};

export default Login;
