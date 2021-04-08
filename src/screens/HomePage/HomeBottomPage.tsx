import React, { useContext } from 'react';

import LinearGradientButton from 'components/GradientButton';

import { ElementType, SizeType, Player } from 'types';

import theme from 'static/theme';
import scale from 'static/scale';

import Add from 'assets/AddButton.svg';

import useWording from 'hooks/wording';

import {
  AddInputContainer,
  PlayContainer,
  CustomTextInput,
  AddButton,
  ButtonContainer,
} from './HomeStyle';

const style = {
  buttonWidth: scale(250),
  buttonHeight: scale(50),
  borderRadius: scale(25),
  borderColor: 'transparent',
  borderWidth: 0,
};
const gradientStyle = {
  borderRadius: scale(25),
  justifyContent: 'center',
  alignItems: 'center',
};
const textProps = {
  size: SizeType.MEDIUM,
  color: theme.black,
  font: ElementType.SEMIBOLD,
}

export interface HomeBottomProps {
  selection: boolean;
  input: string;
  setInput: (input: string) => void;
  addPlayer: (player: Player) => void;
  addWord: (input: string) => void;
  navigation: any;
}

const HomeBottomPage = (props): JSX.Element => {
  const {
    selection,
    input,
    setInput,
    addPlayer,
    addWord,
    navigation,
  } = props;
  const wordingContext = useContext(useWording);

  return (
    <>
      <AddInputContainer>
        <CustomTextInput
          placeholder={selection ? wordingContext.wording.input.inputPlayer : wordingContext.wording.input.inputWord}
          placeholderTextColor={theme.placeholder}
          placeholderStyle={{ fontFamily: 'Dosis-SemiBold', fontSize: scale(24) }}
          defaultValue={input}
          onChangeText={text => setInput(text)}
        />

        <ButtonContainer>
          <AddButton onPress={(): void => {
            if (input !== '') {
              selection ? addPlayer({ name: input, points: 0 })
              : addWord(input);
              setInput('');
            }
          }}>
            <Add />
          </AddButton>
        </ButtonContainer>
      </AddInputContainer>

      <PlayContainer>
        <LinearGradientButton
          onPress={(): void => { navigation.navigate('GameChoice'); }}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.play}
        />
      </PlayContainer>
    </>
  );
};

export default HomeBottomPage;