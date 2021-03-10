import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput``;

const TextInput = ({
  style,
  placeholderStyle,
  value,
  ...rest
}: any): JSX.Element => (
  <Input
    {...rest}
    style={!value ? [style, placeholderStyle] : style}
  />
);

export default TextInput;