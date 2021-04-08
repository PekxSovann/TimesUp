import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import Reload from 'assets/Reload.svg';

import theme from 'static/theme';

import GameContext, { ChangeWordFct } from 'hooks/game';
import useLoading from 'hooks/loader';
import useWording from 'hooks/wording';

import {
  ListItem,
  ReloadButton
} from './WordSelectionStyle';

export interface ListWordProps {
  option: string;
  reload: (index: number, words: string[]) => string[];
}

const ListWord = (props: ListWordProps): JSX.Element => {
  const { option, reload } = props;
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(useWording);
  const { loading, setLoading } = useLoading();

  const functions: ChangeWordFct = {
    solo: gameContext.setSolo,
    game: gameContext.setGame,
  }

  const formatWords = (word: string): string => word.length <= 14 ?  word :  `${word.substring(0, 14)}...`;

  return (
    <>
      <FlatList
        data={gameContext[option].wordToFind}
        keyExtractor={item => item}
        renderItem={({ item, index }): JSX.Element => (
          <ListItem>
            <Text
              style={{ marginLeft: 10 }}
              font={ElementType.BOLD}
              size={SizeType.BIG}
              color={theme.black}
            >
              {`${index + 1}. ${formatWords(item)}`}
            </Text>

            <ReloadButton onPress={() => {
              setLoading(!loading)
              functions[option]({ ...gameContext[option] , wordToFind: reload(index, gameContext[option].wordToFind) });
            }}>
              <Reload width={'100%'} height={'100%'}/>
            </ReloadButton>
          </ListItem>
        )}
      />

      <Spinner
        visible={loading}
        textContent={wordingContext.wording.modal.loading}
        textStyle={{ color: theme.white }}
      />
    </>
  );
};

export default ListWord;
