import React, { useState, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Dimmer,
  Loader,
  Grid,
  Sticky,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Button, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TitleIcon from "@material-ui/icons/Title";

import { SubstrateContextProvider, useSubstrate } from "../substrate-lib";
import { DeveloperConsole } from "../substrate-lib/components";

import AccountSelector from "../AccountSelector";
import Balances from "../Balances";
import BlockNumber from "../BlockNumber";
import Events from "../Events";
import Interactor from "../Interactor";
import Metadata from "../Metadata";
import NodeInfo from "../NodeInfo";
import TemplateModule from "../TemplateModule";
import Transfer from "../Transfer";
import Upgrade from "../Upgrade";


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
function Exportfun() {
  const classes = useStyles();

  const [accountAddress, setAccountAddress] = useState(null);
  const { apiState, keyring, keyringState, apiError } = useSubstrate();
  const accountPair =
  accountAddress &&
    keyringState === "READY" &&
    keyring.getPair(accountAddress);

  const loader = (text) => (
    <Dimmer active>
      <Loader size="small">{text}</Loader>
    </Dimmer>
  );



  const message = (err) => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header="Error Connecting to Substrate"
          content={`${JSON.stringify(err, null, 4)}`}
        />
      </Grid.Column>
    </Grid>
  );

  if (apiState === "ERROR") return message(apiError);
  else if (apiState !== "READY") return loader("Connecting to Substrate");

  if (keyringState !== "READY") {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    );
  }
  const contextRef = createRef();
  return (
    <div ref={contextRef}>
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
      <Sticky context={contextRef}>
        <AccountSelector setAccountAddress={setAccountAddress} />
      </Sticky>
      <Container>
        <Grid stackable columns="equal">
          <Grid.Row stretched>
            {/* <NodeInfo />
            <Metadata /> */}
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>
          <Grid.Row stretched>
            <Balances />
          </Grid.Row>
          <Grid.Row>
            <Transfer accountPair={accountPair} />
            {/* <Upgrade accountPair={accountPair} /> */}
            <Events />

          </Grid.Row>
          <Grid.Row>
            {/* <Interactor accountPair={accountPair} /> */}
          </Grid.Row>
          {/* <Grid.Row>
            <TemplateModule accountPair={accountPair} />
          </Grid.Row> */}
        </Grid>
      </Container>
      <DeveloperConsole />
    </div>
  );
}

export default function Export() {
  return (
    <SubstrateContextProvider>
      <Exportfun />
    </SubstrateContextProvider>
  );
}
