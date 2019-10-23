import React from 'react';
import * as PropTypes from 'prop-types';

import Field from './CustomField';

import { minLengthRule } from '../../rules';

const TextField = props => (
  <Field {...props} validate={minLengthRule}>
    {({ input }) => <input {...input} type="text" />}
  </Field>
);

export default TextField;
