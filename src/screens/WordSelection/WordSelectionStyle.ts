import styled from 'styled-components/native';

import theme from 'static/theme';
import scale from 'static/scale';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const ListContainer = styled.View`
  flex: 1;
`;

const TitleContainer = styled.View`
  flex: 0.1;
  align-items: center;
`;

const WordContainer = styled.View`
  flex: 0.77;
`;

const ButtonContainer = styled.View`
  flex: 0.15;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.View`
  margin-left: ${`${scale(10)}px`};
  margin-right: ${`${scale(10)}px`};
  height: ${`${scale(60)}px`};
  background-color: ${theme.lightGrey};
  margin-bottom: ${`${scale(3)}px`};
  border-radius: ${`${scale(10)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReloadButton = styled.TouchableOpacity`
  height: ${`${scale(20)}px`};
  width: ${`${scale(20)}px`};
  margin-right: ${`${scale(10)}px`};
`;

export {
  Container,
  ListContainer,
  WordContainer,
  TitleContainer,
  ButtonContainer,
  ListItem,
  ReloadButton
};
