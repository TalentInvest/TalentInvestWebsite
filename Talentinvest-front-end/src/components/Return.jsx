import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";

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
export default function Return() {
    const classes = useStyles(); 
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
          <Button color="inherit" href="/export">My Profile</Button>
        </Toolbar>
        </AppBar>
        <Box marginTop={10} marginLeft={20}>
          <Button variant="contained" color="primary">
            Return Payment
          </Button>  
        </Box>
      </Box>   
    );
}
