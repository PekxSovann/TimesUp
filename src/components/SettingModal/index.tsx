import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

import LinearGradientButton from 'components/GradientButton';

import useWording from 'hooks/wording';
import useModal from 'hooks/modal';
import useWords from 'hooks/words';

import { ElementType, SizeType } from 'types';

import theme from 'static/theme';

import {
  Container,
  ModalText,
  FlagContainer,
  FlagFrench,
  FlagEnglish,
  FlagButton,
  DefaultWords,
  CustomCheckBox,
  DefaultText,
  style,
  gradientStyle,
  textProps,
  ButtonContainer,
} from './SettingModalStyle';

const SettingModal = (): JSX.Element => {
  const navigation = useNavigation();
  const wordingContext = useContext(useWording);
  const modalContext = useContext(useModal);
  const wordsContext = useContext(useWords);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (loader)
      setTimeout(() => { setLoader(false); }, 1000);
  }, [loader]);

  return (
    <Modal
      isVisible={modalContext.modalVisible}
      onBackdropPress={() => modalContext.setVisibility(false)}
    >
      <Container>
        <ModalText
          color={theme.black}
          size={SizeType.BIG}
          font={ElementType.BOLD}
        >
          {`${wordingContext.wording.modal.language}:`}
        </ModalText>

        <FlagContainer>
          <FlagButton
            disabled={wordingContext.language === 'english'}
            onPress={() => {
              wordingContext.changeLanguage('english');
              setLoader(true);
            }}
          >
            <FlagEnglish isSelected={wordingContext.language === 'english'} width="100%" height="100%" />
          </FlagButton>

          <FlagButton
            disabled={wordingContext.language === 'french'}
            onPress={() => {
              wordingContext.changeLanguage('french');
              setLoader(true);
            }}
          >
            <FlagFrench isSelected={wordingContext.language === 'french'} width="100%" height="100%" />
          </FlagButton>
        </FlagContainer>

        <DefaultWords>
          <DefaultText
            color={theme.black}
            size={SizeType.NORMAL}
            font={ElementType.BOLD}
          >
            {wordingContext.wording.modal.default}
          </DefaultText>

          <CustomCheckBox
            onCheckColor={theme.background}
            onTintColor={theme.background}
            onFillColor={theme.background}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            disabled={false}
            value={wordsContext.useDefaultWords}
            onValueChange={(newValue) => wordsContext.setDefaultWord(newValue)}
          />
        </DefaultWords>

        <ButtonContainer>
          <LinearGradientButton
            onPress={() => {
              modalContext.setVisibility(false);
              navigation.navigate('Rules');
            }}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.rules}
          />

          <LinearGradientButton
            onPress={() => modalContext.setVisibility(false)}
            style={style}
            textProps={textProps}
            gradientStyle={gradientStyle}
            label={wordingContext.wording.buttons.quit}
          />
        </ButtonContainer>
      </Container>

      <Spinner
        visible={loader}
        textContent={wordingContext.wording.modal.loading}
        textStyle={{ color: theme.white }}
      />
    </Modal>
  );
};

export default SettingModal;
