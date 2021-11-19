import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useField } from './FieldContext';
import { Typography } from '../Typography';

const RequiredIcon = styled(Typography)`
  line-height: 0;
`;

export const FieldLabel = ({ children, required, ...props }) => {
  const { id } = useField();

  return (
    <Typography
      variant="pi"
      textColor="neutral800"
      htmlFor={id}
      fontWeight="bold"
      as="label"
      required={required}
      {...props}
    >
      {children}
      {required && <RequiredIcon textColor="danger600">*</RequiredIcon>}
    </Typography>
  );
};

FieldLabel.defaultProps = {
  required: false,
};
FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
};
