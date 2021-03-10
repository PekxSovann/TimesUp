import styled from 'styled-components/native';

import { SelectionButtonProps } from 'types';
import theme from 'static/theme';
import scale from 'static/scale';

import TextInput from 'components/TextInput';

const Container = styled.View`
  background-color: ${theme.background};
  flex: 1;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${`${scale(150)}px`};
`;

const SelectionContainer = styled.View`
  flex: 0.15;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SelectionButton = styled.TouchableOpacity<SelectionButtonProps>`
  border-bottom-width: ${(props): string => props.isSelect ? '3px' : '0px'};
  border-bottom-color: ${theme.white};
`;

const AddButton = styled.TouchableOpacity`
  height: ${scale(30)}px;
  width: ${scale(30)}px;
`;

const ButtonContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.View`
  flex: 0.45;
  margin-left: ${`${scale(5)}px`};
  margin-right: ${`${scale(5)}px`};
  height: ${`${scale(200)}px`};
  margin-top: ${`${scale(3)}px`};
`;

const AddInputContainer = styled.View`
  flex: 0.1;
  min-height: ${`${scale(60)}px`};
  background-color: ${theme.white};
  flex-direction: row;
`;

const PlayContainer = styled.View`
  flex: 0.2;
  min-height: ${`${scale(85)}px`};
  justify-content: center;
  align-items: center;
`;

const CustomTextInput = styled(TextInput)`
  flex: 0.8;
  min-height: ${`${scale(60)}px`};
  margin-left: 10px;
`;

const ListItem = styled.View`
  height: ${`${scale(60)}px`};
  background-color: ${theme.lightGrey};
  margin-top: ${`${scale(3)}px`};
  border-radius: ${`${scale(10)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.TouchableOpacity`
  flex: 0.1;
  margin-right: ${`${scale(10)}px`};
`;

export {
  RemoveButton,
  ListItem,
  Container,
  SelectionContainer,
  SelectionButton,
  LogoContainer,
  ListContainer,
  AddInputContainer,
  PlayContainer,
  CustomTextInput,
  AddButton,
  ButtonContainer,
};
