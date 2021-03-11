import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SettingButton, SettingsLogo, QuitLogo } from 'components/Header/HeaderStyle';

import useModal from 'hooks/modal';

import {
  Container,
  LogoContainer,
  ButtonContainer,
  LogoGame,
} from './PreGameHeaderStyle';

const PreGameHeader = (): JSX.Element => {
  const navigation = useNavigation();
  const modalContext = useContext(useModal);

  return (
    <Container>
      <LogoContainer>
        <LogoGame width={'80%'} height={'80%'} />
      </LogoContainer>

      <ButtonContainer>
        <SettingButton onPress={() => modalContext.setVisibility(true)}>
          <SettingsLogo width={'100%'} height={'100%'} />
        </SettingButton>

        <SettingButton onPress={() => navigation.goBack()}>
          <QuitLogo width={'100%'} height={'100%'} />
        </SettingButton>
      </ButtonContainer>
    </Container>
  );
};

export default PreGameHeader;