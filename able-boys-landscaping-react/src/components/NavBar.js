import React, { useState, useEffect, useRef } from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
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
    borderRadius: '0px',
    // padding: '2px',
    '&:hover': {
      color: '#b2dfdb',
      borderBottom: '3px solid #b2dfdb'
    },
  },
  root: {
    display: 'flex',
  },
  appBar: {
    padding: theme.spacing(2),
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  },
  hide: {
    display: 'none',
  },
  toggle: {
    padding: '12px'
  }
}))


export default function NavBar(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
    console.log(height)
    // debugger
  })
  return (
    <>
      <Box display={{ xs: 'none', md: 'block' }} >
        <AppBar position={"static"} showMenuIconButton={false} title={<Typography variant="h3" color="secondary" className={classes.appBar}>ABL Logo</Typography>}>

          <Toolbar className={classes.Toolbar} >
            <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/">About</Button>

            <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/services">Services</Button>

            <Button edge="end" size="large" color="secondary" className={classes.nav_button} href="/contact">Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box display={{ xs: 'block', md: 'none' }} >
        <div className={classes.root} ref={appBarRef}>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
            showMenuIconButton={false}
            title={<Typography variant="h3" color="secondary" className={classes.appBar}>ABL Logo</Typography>}
          // iconStyleLeft={{ padding: '12px' }}
          // onLeftIconButtonClick={handleDrawerOpen}
          // title={<Typography variant="h3" noWrap color="secondary">
          //   ABL LOGO
          //   </Typography>}
          // iconClassNameLeft={clsx(classes.menuButton, open && classes.hide)}
          // iconStyleLeft={{ display: 'true' }}
          >
            <Toolbar>
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
        </div>
        <LeftDrawer open={open} handleDrawerClose={handleDrawerClose} height={height} />
      </Box >
    </>
  );
}

