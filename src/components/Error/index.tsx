import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import LinearGradientButton from 'components/GradientButton';
import { ModalText, style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType } from 'types';

import useWording from 'hooks/wording';
import useModal from 'hooks/modal';

import theme from 'static/theme';

import {
  Container,
} from './ErrorStyle';

const ErrorModal = (): JSX.Element => {
  const wordingContext = useContext(useWording);
  const modalContext = useContext(useModal);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (loader)
      setTimeout(() => { setLoader(false); }, 1000);
  }, [loader]);

  return (
    <Modal
      isVisible={modalContext.errorModalVisible}
      onBackdropPress={() => modalContext.setErrorVisibility(false)}
    >
      <Container>
        <ModalText
          color={theme.error}
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {`${wordingContext.wording.modal.error}`}
        </ModalText>

        <ModalText
          style={{ textAlign: 'center' }}
          color={theme.black}
          size={SizeType.NORMAL}
          font={ElementType.BOLD}
        >
          {`${modalContext.errorMessage}`}
        </ModalText>

        <LinearGradientButton
          onPress={() => modalContext.setErrorVisibility(false)}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.quit}
        />
      </Container>
    </Modal>
  );
};

export default ErrorModal;
