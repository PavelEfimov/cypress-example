import React from 'react';
import * as PropTypes from 'prop-types';

import { Form } from 'react-final-form';

const CustomForm = ({ onSubmit, validate, children }) => (
    <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit}>{children({ pristine, submitting })}</form>
        )}
    />
);

export default CustomForm;
