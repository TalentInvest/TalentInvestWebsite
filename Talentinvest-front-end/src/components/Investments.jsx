import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";

function Investments(props) {

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
  const classes = useStyles();
  const value = props.location.state.value;
  
  
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
        <Box ml={20} mt={10}>
          <Box fontSize={48}>
                {/* {value} */}
                Successfully invested ${value} into Steve Lobs!
          </Box>
          <Box fontSize={48}>
            Your current balance is: $
          </Box>
          <Box>
            <Box fontSize={36} mt={10}>What's Next?</Box>
            <Box px={2} pt={2}>
              <Button variant="contained" color="primary">
                Send Message to Steve Lobs
              </Button>
            </Box>
            <Box px={2} pt={1}>
              <Button variant="contained" color="primary">
                Share to Social Media
              </Button>
            </Box>
            <Box px={2} pt={1}>
              <Button variant="contained" color="primary">
                Back to Profile
              </Button>
            </Box>         
          </Box>            
        </Box>
      </Box>
    )
  }


export default Investments
