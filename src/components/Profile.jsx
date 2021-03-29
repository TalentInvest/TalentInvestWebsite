import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TitleIcon from '@material-ui/icons/Title';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/People';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Box, MuiThemeProvider } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

function valuetext(value) {
  return `${value}°C`;
}

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "pink",
      },
      track: {
        color: '#b39ddb'
      },
      rail: {
        color: '#b39ddb'
      }
    }
}
});


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    overflow: 'auto',
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
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
        color: 'inherit',
      },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
  }));



  const useStyles2 = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expanded: {},
  }));

  const useStyles3 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));


function renderIcon(index) {
    switch(index) {
        case 0:
            return <DashboardIcon />
        case 1:
            return <AccountBoxIcon />
        case 2:
            return <LocalLibraryIcon />
        case 3:
            return <ExploreIcon />
        case 4:
            return <ArrowUpwardIcon />
        case 5:
            return <PeopleIcon />
        case 6:
            return <EmojiObjectsIcon />
    }
}

export default function Profile() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const [expanded, setExpanded] = React.useState('panel1');
  const [expanded2, setExpanded2] = React.useState('panel2');
  const [expanded3, setExpanded3] = React.useState('panel3');
  const [expanded4, setExpanded4] = React.useState('panel4');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
  const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false);
  };
  const handleChange4 = (panel) => (event, newExpanded) => {
    setExpanded4(newExpanded ? panel : false);
  };

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [values, setValues] = React.useState({
    amount: ''
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: '#b39ddb' }} position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" href="/" className={classes1.menuButton} color="inherit" aria-label="menu">
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
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/search">Explore</Button>
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
            {['Dashboard', 'About Me', 'Education', 'Experience', 'Accomplishments', 'Endorsements', 'Interests'].map((text, index) => (
              <ListItem button key={text}>
                  
                <ListItemIcon>{ renderIcon(index) }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>

      
      <Box flex="70%" padding="10px" marginRight={10}>
        <Box marginTop={12} width="100%" textAlign="center">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes2.heading}>Work Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes2.heading}>Accomplishments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange3('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes2.heading}>Endorsements</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion expanded={expanded4 === 'panel4'} onChange={handleChange4('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes2.heading}>Interests</Typography>
            </AccordionSummary>
          </Accordion>
        </Box>
      </Box>
      <Box marginTop={12} marginRight={3} width={400} height={1200} marginBottom={10} display="flex">
        <Box fontSize={14} boxShadow={3} borderRadius={16} padding={3}>
          Steve's Education Fund
          <ThemeProvider theme={muiTheme}>
          <Slider
            backgroundColor='red'
            defaultValue={81}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            disabled
          />
          </ThemeProvider>

          <Typography id="discrete-slider" gutterBottom fontSize={12}>
            <Box color="#26c6da" fontWeight="600">
              Remaining: $403
            </Box>
            
          </Typography>
          <Typography id="discrete-slider" gutterBottom fontSize={12} >
            <Box color="#26c69a" fontWeight="600">
              Raised: $4597  
            </Box>
            
          </Typography>
          <Box marginTop={4}/>
          <Divider/>
          <Box marginTop={4} marginBottom={6}>
            <Input
              label="Amount"
              id="standard-adornment-amount"
              value={values.amount}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
            <Box marginTop={2} marginLeft={5}>
                <Button variant="outlined" color="primary">Invest</Button>
            </Box>
          </Box>
          <Divider/>
          <Box marginTop={4} marginBottom={3}>
            <Box fontSize={12}>
              <Grid item >
                <Box fontSize={15}>
                  <b>Income Sharing Agreement</b>
                </Box>
                  
                <div className={classes3.demo}>
                  <List dense={dense}>
                      <ListItem>
                        <ListItemText
                          primary="Total Funding Amount: $5,000"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Return Duration: 10 years"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Monthly Income Share: 4.25%"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Monthly Income Cap: $2,500"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Maximum Return: x2 Investment"
                        />
                      </ListItem>
                  </List>
                </div>
              </Grid>
            </Box>
          </Box>
          <Divider />
          <Box fontSize={16} marginTop={4} marginBottom={3}>
            <b >Cost Breakdown</b>
            <Box fontSize={13} marginTop={1}>Tuition: 74%</Box>
            <Box fontSize={13}>Books: 52%</Box>
            <Box fontSize={13}>Transportation: 18%</Box>
            <Box fontSize={13}>Other: 3%</Box>
          </Box>
          <Divider />
          <Box fontSize={16} marginTop={4} marginBottom={3}>
            <b >Upcoming Education</b>
            <Box marginTop={1}/>
            <img src="https://www.swissquantumhub.com/wp-content/uploads/2020/08/logo_UniversityOfCaliforniaBerkeley.png" width="200" height={50}/>
            <Box marginTop={2} fontSize={14}>University of California, Berkeley</Box>
            <Box fontSize={13}>B.A. Computer Science</Box>
            <Box fontSize={13}>2021-2025</Box>
            <Box fontSize={15} marginTop={2}>
              <b>Proof of Acceptance</b>
              <Box textDecorationLine='underline' fontSize={13}>
                Steve_Acceptance_Letter.pdf
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}