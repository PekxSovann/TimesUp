import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import PreGameHeader from 'components/PreGameHeader';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';
import LinearGradientButton from 'components/GradientButton';

import { SizeType, ElementType } from 'types';

import theme from 'static/theme';

import WordingContext from 'hooks/wording';

import {
  Container,
  SplitContainer,
  CustomText,
} from './GameChoiceStyle';

const GameChoice = (): JSX.Element => {
  const navigation = useNavigation();
  const wordingContext = useContext(WordingContext);

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
          onPress={() => navigation.navigate('SoloSettings')}
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
          onPress={() => navigation.navigate('GameSettings')}
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
