import React from 'react';
import * as PropTypes from 'prop-types';

import { Field } from 'react-final-form';

import { requiredRule, compose } from '../../rules';

const CustomField = ({ required, name, placeholder, validate, children }) => (
  <Field
    name={name}
    validate={required ? compose(requiredRule, validate) : validate}
    render={({ input, meta }) => (
      <div>
        {children({ input: Object.assign({}, input, { placeholder }) })}
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    )}
  />
);

export default CustomField;
