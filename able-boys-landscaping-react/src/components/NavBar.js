import React, { useState, useEffect, useRef } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles'
import { Button, fade } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import LeftDrawer from './LeftDrawer'


const useStyles = makeStyles(theme => ({
  nav_button: {
    paddingRight: theme.spacing(9),
    paddingLeft: theme.spacing(9),
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out 0.1s",
    },
    '&:hover:before': {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
  appBarText: {
    padding: theme.spacing(1, 2),
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  },
  hide: {
    display: 'none',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))


export default function NavBar(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const topCheck = window.scrollY < window.innerHeight
      if (isTop !== topCheck) {
        setIsTop(topCheck)
      }
    })
  })
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [height, setHeight] = useState(0);
  const appBarRef = useRef(null);
  useEffect(() => {
    setHeight(appBarRef.current.clientHeight);
  })
  return (
    <>
      <Box display={{ xs: 'none', md: 'block' }} >
        <AppBar
          position={"fixed"}
          color={isTop ? 'transparent' : 'primary'}
          elevation={isTop ? 0 : 4}

        >
          <Toolbar className={classes.flex} >
            <Typography variant="h3" color="secondary" className={classes.appBarText}>ABL Logo</Typography>
            <>
              <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/">About</Button>
              <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/services">Services</Button>
              <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/contact">Contact</Button>
            </>
          </Toolbar>
        </AppBar>
      </Box>
      <Box display={{ xs: 'block', md: 'none' }} >
        <AppBar
          ref={appBarRef}
          position="fixed"
          className={clsx(classes.appBarText, {
            [classes.appBarShift]: open,
          })}
          color={isTop ? 'transparent' : 'primary'}
          elevation={isTop ? 0 : 4}

        >
          <Toolbar className={classes.flex} >
            <Typography variant="h3" color="secondary" className={classes.appBarText}>ABL Logo</Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{ fill: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <LeftDrawer open={open} handleDrawerClose={handleDrawerClose} height={height} />
      </Box >
    </>
  );
}