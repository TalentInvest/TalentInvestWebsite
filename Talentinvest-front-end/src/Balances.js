import React, { useEffect, useState } from 'react';
import { Table, Grid, Button } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSubstrate } from './substrate-lib';
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Main (props) {
  const { api, keyring } = useSubstrate();
  const accounts = keyring.getPairs();
  const [balances, setBalances] = useState({});

  useEffect(() => {
    const addresses = keyring.getPairs().map(account => account.address);
    let unsubscribeAll = null;

    api.query.system.account
      .multi(addresses, balances => {
        const balancesMap = addresses.reduce((acc, address, index) => ({
          ...acc, [address]: balances[index].data.free.toHuman()
        }), {});
        setBalances(balancesMap);
      }).then(unsub => {
        unsubscribeAll = unsub;
      }).catch(console.error);

    return () => unsubscribeAll && unsubscribeAll();
  }, [api, keyring, setBalances]);


  const names = (n) => {
    if (n == "dave") 
      return "Dave Lobs"
    else {
      return "Eve Smith"  
    }
  }
  return (
    <Grid.Column>
      <h1>My Investments</h1>
      <Table celled striped size='small'>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={3} textAlign='right'>
              <strong>Name</strong>
            </Table.Cell>
            <Table.Cell width={10}>
              <strong>Student Address</strong>
            </Table.Cell>
            <Table.Cell width={3}>
              <strong>Balance (Units)</strong>
            </Table.Cell>
          </Table.Row>
          {accounts.map(account => 
          {
            return account.meta.name == "dave" || account.meta.name == "eve" ? 
            (
            <Table.Row key={account.address}>
              <Table.Cell width={3} textAlign='right' ><Link to={ 
                      {
                        // pathname: "/investments",
                        // state: {value: data}
                        pathname: "/profile",
                      }
                    }>{names(account.meta.name)}</Link>
                  </Table.Cell>
              <Table.Cell width={10}>
                <span style={{ display: 'inline-block', minWidth: '31em' }}>
                  {account.address}
                </span>
                <CopyToClipboard text={account.address}>
                  <Button
                    basic
                    circular
                    compact
                    size='mini'
                    color='blue'
                    icon='copy outline'
                  />
                </CopyToClipboard>
              </Table.Cell>
              <Table.Cell width={3}>{
                balances && balances[account.address] &&
                balances[account.address]
              }</Table.Cell>
            </Table.Row>) : <Box></Box>
          }

          )}
        </Table.Body>
      </Table>
    </Grid.Column>
  );
}
