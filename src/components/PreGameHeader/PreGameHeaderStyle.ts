import styled from 'styled-components/native';

import Logo from 'assets/Logo.svg';

const Container = styled.View`
  flex: 0.15;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: flex-start;
`;

const ButtonContainer = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: flex-end;
`;

const LogoGame = styled(Logo)`
`;

export {
  Container,
  LogoContainer,
  ButtonContainer,
  LogoGame,
};
