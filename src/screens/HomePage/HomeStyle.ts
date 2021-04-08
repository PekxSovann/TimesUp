import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TextInput from 'components/TextInput';

import { SelectionButtonProps } from 'types';

import theme from 'static/theme';
import scale from 'static/scale';

const Aware = styled(KeyboardAwareScrollView)`
  background-color: ${theme.background};
`;

const Container = styled.View`
  background-color: ${theme.background};
  flex: 1;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${Dimensions.get('window').height / 5}px;
`;

const SelectionContainer = styled.View`
  height: ${Dimensions.get('window').height / 11}px;
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
  height: ${Dimensions.get('window').height / 2.75}px;
  min-height: ${Dimensions.get('window').height / 2.75}px;
  margin-top: ${`${scale(3)}px`};
`;

const AddInputContainer = styled.View`
  height: ${Dimensions.get('window').height / 11}px;
  background-color: ${theme.white};
  flex-direction: row;
`;

const PlayContainer = styled.View`
  height: ${Dimensions.get('window').height / 10}px;
  justify-content: center;
  align-items: center;
`;

const CustomTextInput = styled(TextInput)`
  flex: 0.8;
  min-height: ${`${scale(60)}px`};
  margin-left: 10px;
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

const RemoveButton = styled.TouchableOpacity`
  height: ${`${scale(20)}px`};
  width: ${`${scale(20)}px`};
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
  Aware
};
