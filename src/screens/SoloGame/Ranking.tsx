import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import styled from 'styled-components/native';

import Text from 'components/Text';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType, Player } from 'types';

import WordingContext from 'hooks/wording';
import PlayersContext from 'hooks/players';
import GameContext from 'hooks/game';

import scale from 'static/scale';
import theme from 'static/theme';

import {
  PlayContainer,
  BottomContainer,
} from './SoloGameStyle';

interface Ranks {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListItem = styled.View`
  margin-left: ${`${scale(10)}px`};
  margin-right: ${`${scale(10)}px`};
  height: ${`${scale(60)}px`};
  width: ${`${scale(330)}px`};
  background-color: ${theme.lightGrey};
  margin-top: ${`${scale(10)}px`};
  border-radius: ${`${scale(10)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface Ranking {
  points: number;
  number: number;
}

const Ranking = (props: Ranks): JSX.Element => {
  const { setStart } = props;
  const navigation = useNavigation();
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);
  const playerContext = useContext(PlayersContext);

  const sortWinner = (): Player[] => {
    let tmp: Player[] = [];

    for (let i = 0; i < gameContext.solo.players.length; i++)
      tmp.push(JSON.parse(JSON.stringify(gameContext.solo.players[i])));
    tmp.sort((a, b) => b.points - a.points);
    return tmp;
  }

  const playNextRound = (): void => {
    setStart(true);
    gameContext.setSolo({ ...gameContext.solo, displayRanking: false })
  }

  const isEnd = (): string => {
    if (gameContext.solo.round >= 2)
      wordingContext.wording.buttons.end
    if (gameContext.solo.currentWord < gameContext.solo.words)
      return wordingContext.wording.buttons.nextPlayer;
    return wordingContext.wording.buttons.next;
  }

  const ranks: Player[] = sortWinner();
  const rank = [
    wordingContext.wording.pos.first,
    wordingContext.wording.pos.second,
    wordingContext.wording.pos.third,
    wordingContext.wording.pos.other,
  ];

  return (
    <>
      <PlayContainer>
        <FlatList
          data={ranks}
          keyExtractor={item => (item.name + item.points).toString()}
          renderItem={({ item, index }): JSX.Element => (
            <ListItem>
              <Text
                style={{ marginLeft: 10 }}
                font={ElementType.SEMIBOLD}
                size={SizeType.VERYSMALL}
                color={theme.black}
              >
                {`${index + 1}${rank[index < 3 ? index : 3]}`}
              </Text>

              <Text
                font={ElementType.SEMIBOLD}
                size={SizeType.NORMAL}
                color={theme.black}
              >
                {item.name}
              </Text>

              <Text
                style={{ right: 10 }}
                font={ElementType.SEMIBOLD}
                size={SizeType.VERYSMALL}
                color={theme.black}
              >
                {`${item.points} ${wordingContext.wording.game.points}.`}
              </Text>
            </ListItem>
          )}
        />
      </PlayContainer>

      <BottomContainer>
        <LinearGradientButton
          onPress={() => {
            if (gameContext.solo.round >= 2) {
              Orientation.lockToPortrait();
              navigation.navigate('Home');
              gameContext.setSolo({
                chrono: 0,
                words: 0,
                currentWord: 0,
                players: [],
                round: 0,
                roundStart: false,
                displayRanking: false,
                gameWords: [],
                wordToFind: [],
                currentPlayer: 0,
                clueGiver: 0,
              });
              playerContext.resetPlayersPoint();
            } else playNextRound()
          }}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={isEnd()}
        />
      </BottomContainer>
    </>
  );
};

export default Ranking;
