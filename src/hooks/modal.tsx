import { useState, createContext } from 'react';

export interface useModalVisibilityProps {
  modalVisible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  errorModalVisible: boolean;
  setErrorVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  quitModalVisible: boolean;
  setQuitVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ModalContext = createContext<useModalVisibilityProps>({
  modalVisible: false,
  setVisibility: () => {},
  errorModalVisible: false,
  setErrorVisibility: () => {},
  quitModalVisible: false,
  setQuitVisibility: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
})

export const useModal = (): useModalVisibilityProps => {
  const [modalVisible, setVisibility] = useState(false);
  const [errorModalVisible, setErrorVisibility] = useState(false);
  const [quitModalVisible, setQuitVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return {
    modalVisible,
    setVisibility,
    errorModalVisible,
    setErrorVisibility,
    errorMessage,
    setErrorMessage,
    quitModalVisible,
    setQuitVisibility
  };
}

export default ModalContext;
