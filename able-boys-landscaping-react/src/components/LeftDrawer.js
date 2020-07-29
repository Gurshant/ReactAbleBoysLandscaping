import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = '100%';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  links: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
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
      transition: "all 0.3s ease-in-out 0s",
    },
    '&:hover:before': {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
  list: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  divider: {
    backgroundColor: 'rgba(255,255,255,0.3)'
  }, close: {
    marginRight: '12px',
    padding: '12px'
  }
}))


const LeftDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader} style={{ height: `${props.height}px` }} >
        <IconButton onClick={props.handleDrawerClose} color={"secondary"} className={classes.close} >
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <Divider className={classes.divider} />
      <List className={classes.list}>
        <ListItem button component="a" href="/about">
          <ListItemText className={classes.links} primary={<Typography variant="h4">About</Typography>} />
        </ListItem>
        <ListItem button component="a" href="/services">
          <ListItemText className={classes.links} primary={<Typography variant="h4" >Services</Typography>} />
        </ListItem>
        <ListItem button component="a" href="/Contact">
          <ListItemText className={classes.links} primary={<Typography variant="h4" >Contact</Typography>} />
        </ListItem>
      </List>
    </Drawer>

  );
}
export default LeftDrawer;
