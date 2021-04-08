import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import PreGameHeader from 'components/PreGameHeader';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';
import LinearGradientButton from 'components/GradientButton';

import { SizeType, ElementType } from 'types';

import theme from 'static/theme';

import WordingContext from 'hooks/wording';
import useModal from 'hooks/modal';
import usePlayers from 'hooks/players';

import {
  Container,
  SplitContainer,
  CustomText,
} from './GameChoiceStyle';

const GameChoice = (): JSX.Element => {
  const navigation = useNavigation();
  const wordingContext = useContext(WordingContext);
  const playersContext = useContext(usePlayers);
  const modalContext = useContext(useModal);

  return (
    <Container>
      <PreGameHeader />

      <SplitContainer>
        <CustomText
          color={theme.white}
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {wordingContext.wording.preGame.soloTitle}
        </CustomText>

        <CustomText
          style={{ textAlign: 'center' }}
          color={theme.white}
          size={SizeType.SMALL}
          font={ElementType.BOLD}
        >
          {wordingContext.wording.preGame.soloDescription}
        </CustomText>

        <LinearGradientButton
          onPress={() => {
            if (playersContext.playerList.length > 2)
              navigation.navigate('SoloSettings')
            else {
              modalContext.setErrorMessage(wordingContext.wording.errors.soloPlayer);
              modalContext.setErrorVisibility(true);
            }
          }}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.play}
        />
      </SplitContainer>

      <SplitContainer>
        <CustomText
          color={theme.white}
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {wordingContext.wording.preGame.gameTitle}
        </CustomText>

        <CustomText
          style={{ textAlign: 'center' }}
          color={theme.white}
          size={SizeType.SMALL}
          font={ElementType.BOLD}
        >
          {wordingContext.wording.preGame.gameDescription}
        </CustomText>

        <LinearGradientButton
          onPress={() => {
            if (playersContext.playerList.length > 3)
              navigation.navigate('GameSettings')
            else {
              modalContext.setErrorMessage(wordingContext.wording.errors.player);
              modalContext.setErrorVisibility(true);
            }
          }}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.play}
        />
      </SplitContainer>
    </Container>
  );
};

export default GameChoice;
