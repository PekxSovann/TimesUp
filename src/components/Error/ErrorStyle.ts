import styled from 'styled-components/native';

import scale from 'static/scale';
import theme from 'static/theme';

const Container = styled.View`
  flex: 0.4;
  background-color: ${theme.white};
  border-radius: ${scale(10)}px;
  align-items: center;
  justify-content: space-evenly;
`;

export {
  Container,
};
