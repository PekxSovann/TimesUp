import styled from 'styled-components/native';

import scale from 'static/scale';

import Logo from 'assets/Logo.svg';

const Container = styled.View`
  height: ${scale(70)}px;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${scale(10)}px;
`;

const ButtonContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: flex-end;
`;

const TitleContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const LogoGame = styled(Logo)`
`;

export {
  Container,
  LogoContainer,
  TitleContainer,
  ButtonContainer,
  LogoGame,
};
