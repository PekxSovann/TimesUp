import React, { useContext } from 'react';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import useWording from 'hooks/wording';

import {
  SelectionContainer,
  SelectionButton,
} from './HomeStyle';

export interface SelectionProps {
  selection: boolean;
  setSelection: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Selection = (props: SelectionProps): JSX.Element => {
  const { selection, setSelection, setInput } = props;
  const wordingContext = useContext(useWording);

  return (
    <SelectionContainer>
      <SelectionButton
        isSelect={selection}
        onPress={(): void => {
          setSelection(true);
          setInput('');
        }}
      >
        <Text
          font={ElementType.BOLD}
          size={SizeType.BIG}
        >
          {wordingContext.wording.selection.playerSelect}
        </Text>
      </SelectionButton>

      <SelectionButton
        isSelect={!selection}
        onPress={(): void => {
          setSelection(false);
          setInput('');
        }}
      >
        <Text
          font={ElementType.BOLD}
          size={SizeType.BIG}
        >
          {wordingContext.wording.selection.wordSelect}
        </Text>
      </SelectionButton>
    </SelectionContainer>
  );
};

export default Selection;
