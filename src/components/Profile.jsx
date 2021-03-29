import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import ExploreIcon from "@material-ui/icons/Explore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/People";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Avatar from "@material-ui/core/Avatar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const useStyles3 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function renderIcon(index) {
  switch (index) {
    case 0:
      return <DashboardIcon />;
    case 1:
      return <AccountBoxIcon />;
    case 2:
      return <LocalLibraryIcon />;
    case 3:
      return <ExploreIcon />;
    case 4:
      return <ArrowUpwardIcon />;
    case 5:
      return <PeopleIcon />;
    case 6:
      return <EmojiObjectsIcon />;
  }
}

export default function Profile() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const classesGrid = useStyles3();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#b39ddb" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            href="/"
            className={classes1.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <TitleIcon />
          </IconButton>
          <Typography variant="h6" className={classes1.title}>
            Talent Invest
          </Typography>
          <div className={classes1.search}>
            <div className={classes1.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes1.inputRoot,
                input: classes1.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/search">
            Explore
          </Button>
          <Button color="inherit">Find Mentors</Button>
          <Button color="inherit">Messaging</Button>
          <Button color="inherit">Notifications</Button>
          <Button color="inherit">My Profile</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {[
              "Dashboard",
              "About Me",
              "Education",
              "Experience",
              "Accomplishments",
              "Endorsements",
              "Interests",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>

      <Box marginTop={10} marginLeft={10} width={1000}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={9}>
            <Paper className={classesGrid.paper}>
              <Box display="flex" height={200}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-end"
                  marginLeft={2}
                >
                  <Box fontSize={20} fontWeight="bold">
                    <Avatar
                      alt="Remy Sharp"
                      src="images/stevelobs.jpg"
                      style={{ width: 100, height: 100 }}
                    />
                  </Box>

                  <Box fontSize={20} fontWeight="bold">
                    Steve Lobs
                    <Divider />
                  </Box>

                  <Box textAlign="left" width={300}>
                    University Of California, Berkeley
                  </Box>
                  <Box>San Francisco, California</Box>
                </Box>
                <Box marginLeft={25} marginTop={6}>
                  <Button variant="contained" color="secondary">
                    Add Section
                  </Button>
                  <Box marginTop={2}></Box>
                  <Button variant="contained" color="default">
                    More...
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classesGrid.paper}>
              <Box fontSize={16}>Steve's Education Fund</Box>
              <Divider />
              <Box marginTop={2}>
                <CircularProgressWithLabel value={65} size={100} />
              </Box>
              <Box textAlign="left" style={{ float: "left" }}>
                Raised: $8254
              </Box>
              <Box
                textAlign="left"
                style={{
                  background: "blue",
                  width: "20px",
                  height: "20px",
                  float: "left",
                }}
                marginLeft={7}
                borderRadius={20}
              />

              <Box
                style={{ clear: "both", float: "left" }}
                textAlign="left"
                marginTop={1}
              >
                Remaining: $4039
              </Box>
              <Box
                textAlign="left"
                style={{
                  borderStyle: "solid",
                  borderColor: "blue",
                  width: "20px",
                  height: "20px",
                  float: "left",
                }}
                marginLeft={4}
                marginTop={1}
                borderRadius={20}
              />
              <Box style={{ clear: "both" }}></Box>
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classesGrid.paper}>
              <Box>Education</Box>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classesGrid.paper}>
              <Box display="flex">
                <TextField
                  id="outlined-basic"
                  label="Invest"
                  variant="outlined"
                />
                <Box margin={1}>
                  <Button variant="contained" color="primary">
                    Invest
                  </Button>
                </Box>
              </Box>
              <Box
                textAlign="center"
                marginTop={1}
                fontStyle="italic"
                border={1}
                borderColor="blue"
                borderRadius={16}
              >
                Your Stake: 12.2%
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
