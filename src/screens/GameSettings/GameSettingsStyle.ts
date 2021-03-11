import styled from 'styled-components/native';

import theme from 'static/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const OptionContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex: 0.15;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  OptionContainer,
  ButtonContainer
};
