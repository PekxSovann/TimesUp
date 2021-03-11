import styled from 'styled-components/native';

import scale from 'static/scale';
import theme from 'static/theme';

const Container = styled.View`
  border-radius: ${scale(10)}px;
  background-color: ${theme.white};
  margin-left: ${scale(10)}px;
  margin-right: ${scale(10)}px;
  margin-bottom: ${scale(10)}px;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const MemberContainer = styled.View`
  margin-left: ${scale(10)}px;
  margin-right: ${scale(10)}px;
  margin-bottom: ${scale(15)}px;
`;

export {
  Container,
  TitleContainer,
  MemberContainer,
};
