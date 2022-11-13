import { makeStyles } from '@mui/styles'
import React from 'react'
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format} from 'date-fns';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';


const drawerWidth = 240

const useStyles = makeStyles(theme => ( {
    page: {
        padding: theme.spacing(3),
        width: "100%"
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: "flex"
    },
    active: {
      background: "#d7d7d7"
    },
    title: {
      padding: 20,
      fontSize: 100
    },
    appbar: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    }
}))

export default function Layout({children}) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItem = [{
      text: 'My Note',
      icon: <SubjectOutlined color="secondary"></SubjectOutlined>,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary"></AddCircleOutlineOutlined>,
      path: '/create'
    }
  ]

  return (
    <Box className={classes.root}>
    <AppBar
    position="fixed"
    elevation={0}
    color="inherit">
      <Toolbar
      className={classes.appbar}>
        <Typography className={classes.date}>
          {format (new Date(), 'eeee dd MMMM Y')}
        </Typography>
        <Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Typography>
      </Toolbar>
    </AppBar>

    <Drawer
    className={classes.drawer}
    variant="permanent"
    anchor='left'
    classes={{paper: classes.drawerPaper}}
    >
      <Box>
        <Typography className={classes.title}>
            Notes App
        </Typography>
      </Box>

    <List>
      {menuItem.map(item => (
        <ListItem 
        button
        key={item.text}
        onClick={() => history.push(item.path)}
        className={location.pathname == item.path ? classes.active : null}
        >
          <ListItemIcon >{item.icon}</ListItemIcon>
          <ListItemText primary={item.text}></ListItemText>
        </ListItem>
      ))}
    </List>

    </Drawer>
    
    <Box className={classes.page}>
      <Box className={classes.toolbar}></Box>
        {children}
      </Box>


  </Box>

  )
}
