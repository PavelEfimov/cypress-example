import React from 'react';
import * as PropTypes from 'prop-types';

import Field from './CustomField';

import { minLengthRule, maxLengthRule } from '../../rules';

const passwordRule = value => minLengthRule(value) || maxLengthRule(value);

const PasswordField = props => (
  <Field {...props} validate={passwordRule}>
    {({ input }) => <input {...input} type="password" />}
  </Field>
);

export default PasswordField;
