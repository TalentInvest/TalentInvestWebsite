import React, { useState } from 'react';
import { Form, Input, Grid, Label, Icon } from 'semantic-ui-react';
import { TxButton } from './substrate-lib/components';
import { Link } from "react-router-dom";


export default function Main (props) {
  const [status, setStatus] = useState(null);
  const [formState, setFormState] = useState({ addressTo: null, amount: 0 });
  const { accountPair } = props;

  const onChange = (_, data) =>
    setFormState(prev => ({ ...prev, [data.state]: data.value }));

  const { addressTo, amount } = formState;

  return (
    <Grid.Column width={8}>
      <h1>Invest</h1>
      <Form>
        <Form.Field>
          <Label basic color='teal'>
            <Icon name='hand point right' />
            {/* 1 Unit = 1000000000000&nbsp; */}
            1 Unit = $10

          </Label>
          <Label basic color='teal'>
            <Icon name='hand point right' />
            1 kUnit = $10000
          </Label>
          <Label basic color='teal' style={{ marginLeft: 0, marginTop: '.5em' }}>
            <Icon name='hand point right' />
            Transfer more than the existential amount for account with 0 balance
          </Label>
        </Form.Field>

        <Form.Field>
          <Input
            fluid
            label='Student Address'
            type='text'
            placeholder='address'
            state='addressTo'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Amount (USD)'
            type='number'
            state='amount'
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field style={{ textAlign: 'center' }}>
        <Link to={ 
                      {
                        pathname: "/investments",
                        state: {value: formState.amount}
                      }
                    }>
          <TxButton
            accountPair={accountPair}
            label='Submit'
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'balances',
              callable: 'transfer',
              inputParams: [addressTo, 100000000000 * amount],
              paramFields: [true, true]
            }}
          />
          </Link>
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}
