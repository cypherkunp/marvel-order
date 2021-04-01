import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import marvelLogo from '../../assets/marvel-logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: '3.5em',
    marginLeft: '.2em',
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();

  return (
    <header>
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar disableGutters>
            <img src={marvelLogo} alt={marvelLogo} className={classes.logo} />
            <Button variant="contained" color="primary" href="#contained-buttons" disableElevation>
              Timeline
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons" disableElevation>
              Movies
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </header>
  );
}
