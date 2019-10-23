import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import CustomForm from './form/CustomForm';

import { TextField, PasswordField } from './form/fields';

const UserForm = () => {
  const [state, setState] = useState();

  console.log('state: ', state);

  return (
    <div>
      <h4>Create user:</h4>
      <CustomForm onSubmit={v => setState(v)}>
        {props => (
          <div>
            <TextField name="login" placeholder="login" required />
            <PasswordField name="password" placeholder="password" required />
            <button>Send</button>
          </div>
        )}
      </CustomForm>
      {state && (
        <div>
          <p>Your state:</p>
          <p>{`login: ${state.login}`}</p>
          <p>{`password: ${state.password}`}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
