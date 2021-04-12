import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
const studentData = [
  [
    "John S.",
    "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "Stanford",
    "5,000",
    3,
  ],
  [
    "Steve L.",
    "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "UC Berkeley",
    "12,000",
    6,
  ],
  [
    "Michelle C.",
    "https://images.pexels.com/photos/207569/pexels-photo-207569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "Harvard",
    "15,000",
    2,
  ],
  [
    "Laura G.",
    "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "UCSD",
    "10,000",
    0,
  ],
  [
    "Sanjay P.",
    "https://images.pexels.com/photos/3215733/pexels-photo-3215733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "University of Michigan",
    "4,000",
    6,
  ],
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "white",
  },

  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));
export default function Search() {
  const classes = useStyles();
  const gridClasses = useStyles2();

  return (
    <Box>
      <AppBar style={{ background: "#b39ddb" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            href="/"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <TitleIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Talent Invest
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/profile">
            Students
          </Button>
          <Button color="inherit" href="/search">
            Investors
          </Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br />
      <Box
        boxShadow={3}
        borderRadius={16}
        fontStyle="Helvetica"
        square={false}
        paddingTop={3}
        paddingBottom={3}
        fontSize={24}
        bgcolor="#9fa8da"
        marginLeft={10}
        marginRight={10}
        textAlign="center"
      >
        The Next Generation of Talent is Here
        <br />
        Are YOU Ready to Take a Bet on the Future?
        <Box marginTop={3} fontSize={18} paddingLeft={15} paddingRight={15}>
          Browse our student applicants that are looking for Income Sharing
          Agreements. Filter by Upcoming Education, Degree, Financing Needs, and
          much more.
        </Box>
        <TextField id="standard-basic" label="Start Searching" />
      </Box>
      <Box fontWeight="600" marginTop={6} marginLeft={10} fontSize={32}>
        Featured Students
        <Box marginTop={2} marginRight={10}>
          <GridList className={gridClasses.gridList} cols={4.5} spacing={20}>
            {studentData.map((tile) => (
              <GridListTile>
                <img src={tile[1]} alt={tile[0]} />
                <GridListTileBar
                  title={tile[0]}
                  classes={{
                    root: gridClasses.titleBar,
                    title: gridClasses.title,
                  }}
                  subtitle={
                    <Box>
                      <Box marginRight={2}> {tile[2]} </Box>
                      <Box>Looking for: ${tile[3]}</Box>
                      <Box>{tile[4]} Supporters</Box>
                    </Box>
                  }
                  actionIcon={
                    <IconButton
                      href="/profile"
                      aria-label={`info about ${tile[0]}`}
                    >
                      <InfoIcon className={gridClasses.icon} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Box>
      </Box>
    </Box>
  );
}
