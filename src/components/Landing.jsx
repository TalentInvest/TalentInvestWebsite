import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import{ Button, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TitleIcon from '@material-ui/icons/Title';
import Avatar from '@material-ui/core/Avatar';

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
export default function Landing() {
    const classes = useStyles();

    return (
        <Box>
            <AppBar style={{ background: '#b39ddb' }} position="static">
                <Toolbar>
                <IconButton edge="start" href="/" className={classes.menuButton} color="inherit" aria-label="menu">
                    <TitleIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Talent Invest
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/profile">Students</Button>
                <Button color="inherit" href="/search">Investors</Button>
                <Button color="inherit">Testimonials</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>

              

            <Box fontSize={32} fontWeight="bold" length={50} width={600} margin={10}>
                Better Student Financing with Income Sharing Agreements - The new Investment Class
                <Box fontSize={12} color="gray.200" marginTop={3} marginBottom={2} width={450}>
                    Affordable access to higher education remains the foundation for a more sustainable future. At Talent Invest we want to be part of the revolution necessary to drive this goal.
                </Box>
                <Button style={{ background: '#b39ddb' }} variant="contained">
                    <Box color="white">
                        Start a New Profile Today
                    </Box>
        
                </Button>        
            </Box>

            <Box>
                <img src="images/img1.png" width={500} style={{position: 'absolute', top: 100, right: 0}}/>
            </Box>

            <Box fontSize={40} fontWeight={30} margin={2} textAlign="center">
                Our Services
            </Box>

         
                        
            <Box fontSize={16} marginLeft={30} marginRight={30} marginBottom={5} fontFamily="Helvetica" textAlign="center" fontWeight={9} width={700}>
                We provide a marketplace for Students and Investors to connect and transition toward Income Sharing Agreements. 
                With an ISA, we can help students attend the education of their dreams and give them the ability to defer payments until they land a secure job. 
                We provide investors with the opportunity to make impactful decisions by directly supporting the next generation of talent, all 
                while simultaneously earning a return on their investment       
            </Box>

            <Box display="flex" justifyContent="center">
                <Box textAlign="center" fontSize={14} fontWeight="bold" style={{float: "left"}}>
                    <img src="images/person.png" width={"30%"}/>
                    <br />
                    60+ Students
                </Box>

                <Box textAlign="center" height={100}  marginLeft={10}  fontSize={14} fontWeight="bold" style={{float: "left"}}> 
                    <img src="images/glass.png" width={"30%"}/>
                    <br />
                    100+ Investors
                </Box>

                <Box textAlign="center" height={100} marginLeft={10} fontSize={14} fontWeight="bold" style={{float: "left"}}> 
                    <img src="images/link.png" width={"30%"}/>
                    <br />
                    Accessible to All
                </Box>

            </Box>

           
            

        </Box>

    )
}
