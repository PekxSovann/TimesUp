import styled from 'styled-components/native';

import Text from 'components/Text';

import theme from 'static/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const TeamList = styled.FlatList`

`;

const TeamContainer = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex: 0.15;
  justify-content: center;
  align-items: center;
`;

const TeamListContainer = styled.View`
  flex: 1;
  width: 100%;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const CustomText = styled(Text)`
`;

export {
  Container,
  TeamContainer,
  TeamListContainer,
  ButtonContainer,
  TitleContainer,
  CustomText,
  TeamList
};
