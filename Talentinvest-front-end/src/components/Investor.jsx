import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  {
    field: 'investment',
    headerName: 'Investment ($USD)',
    type: 'number',
    width: 160,  
  }
];

const rows = [
  { id: 1, lastName: 'Lobs', firstName: 'Dave', age: 19, investment: 2100 },
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

export default function Investor() {
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
        <Box fontSize={32} mt={3} mb={3} pl={4}>My Investments</Box>
        <div style={{ height: 400, width: '50%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </Box>
    
  );
}