import React from 'react';
import Modal from 'react-native-modal';

import { ElementType, SizeType } from 'types';

import theme from 'static/theme';

import {
  Container,
  ModalText,
} from './SettingModalStyle';

export interface SettingModal {
  modalVisible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingModal = (props: SettingModal): JSX.Element => {
  const { modalVisible, setVisibility } = props;

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setVisibility(false)}
    >
      <Container>
        <ModalText
          color={theme.black}
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          Language:
        </ModalText>
      </Container>
    </Modal>
  );
};

export default SettingModal;
