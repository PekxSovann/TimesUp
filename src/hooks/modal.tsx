import { useState } from 'react';

export interface useModalVisibilityProps {
}

const useModalVisibility = (): { modalVisible: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>> } => {
  const [modalVisible, setVisibility] = useState(false);

  return { modalVisible, setVisibility };
}

export default useModalVisibility