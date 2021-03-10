import React, { useEffect } from 'react';

import { ElementType, SizeType, Player } from 'types';

import theme from 'static/theme';
import scale from 'static/scale';

import Add from 'assets/AddButton.svg';

import LinearGradientButton from 'components/GradientButton';

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
  size: SizeType.BIG,
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
  const placeHolder = {
    player: 'Add a player...',
    word: 'Add a new word...',
  };

  return (
    <>
      <AddInputContainer>
        <CustomTextInput
          placeholder={placeHolder[selection ? 'player' : 'word']}
          placeholderTextColor={theme.placeholder}
          placeholderStyle={{ fontFamily: 'Dosis-SemiBold', fontSize: scale(24) }}
          defaultValue={input}
          onChangeText={text => setInput(text)}
        />

        <ButtonContainer>
          <AddButton onPress={(): void => {
            selection ? addPlayer({ name: input, points: 0 })
            : addWord(input);
            setInput('');
          }}>
            <Add />
          </AddButton>
        </ButtonContainer>
      </AddInputContainer>

      <PlayContainer>
        <LinearGradientButton
          onPress={() => navigation.navigate('GameChoice')}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label="PLAY"
        />
      </PlayContainer>
    </>
  );
};

export default HomeBottomPage;