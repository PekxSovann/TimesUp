import React from 'react';

import { ElementType, SizeType } from 'types';

import Text from 'components/Text';

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
          Players
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
          Add words
        </Text>
      </SelectionButton>
    </SelectionContainer>
  );
};

export default Selection;
