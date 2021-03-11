import React, { useContext } from 'react';

import LinearGradientButton from 'components/GradientButton';

import { ElementType, SizeType, Player } from 'types';

import theme from 'static/theme';
import scale from 'static/scale';

import Add from 'assets/AddButton.svg';

import useModal from 'hooks/modal';
import useWording from 'hooks/wording';
import usePlayers from 'hooks/players';

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
  const wordingContext = useContext(useWording);
  const playersContext = useContext(usePlayers);
  const modalContext = useContext(useModal);

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
          onPress={() => {
            // if (playersContext.playerList.length > 3)
              navigation.navigate('GameChoice');
            // else {
            //   modalContext.setErrorMessage(wordingContext.wording.errors.player);
            //   modalContext.setErrorVisibility(true);
            // }
          }}
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