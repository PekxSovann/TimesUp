import React from 'react';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import {
  Container,
  TitleContainer,
  ButtonContainer,
  CustomButton,
  MinusSvg,
  PlusSvg
} from './GameSettingComponentStyle';

export enum OPERATION {
  INCREASE,
  DECREASE,
}

export interface GameSettingComponent {
  incrementFct: (number: number) => void;
  stopIncCdt: boolean;
  stopDctCdt: boolean;
  value: number;
  text: string;
  subText: string;
};

const GameSettingComponent = (props: GameSettingComponent): JSX.Element => {
  const {
    incrementFct,
    stopIncCdt,
    stopDctCdt,
    value,
    text,
    subText,
  } = props;

  return (
    <Container>
      <TitleContainer>
        <Text
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {text}
        </Text>

        {subText !== '' && (
          <Text
            style={{ textAlign: 'center' }}
            size={SizeType.VERYSMALL}
            font={ElementType.BOLD}
          >
            {subText}
          </Text>
        )}
      </TitleContainer>

      <ButtonContainer>
        <CustomButton
          disabled={stopDctCdt}
          onPress={() => incrementFct(value - 1)}
        >
          <MinusSvg height="100%" width="100%" isDisabled={stopDctCdt} />
        </CustomButton>

        <Text
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {value}
        </Text>

        <CustomButton
          disabled={stopIncCdt}
          onPress={() => incrementFct(value + 1)}
        >
          <PlusSvg width={'100%'} height={'100%'} isDisabled={stopIncCdt} />
        </CustomButton>
      </ButtonContainer>

    </Container>
  );
};

export default GameSettingComponent;
