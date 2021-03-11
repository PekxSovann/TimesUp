import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Text from 'components/Text';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { ElementType, SizeType } from 'types';

import WordingContext from 'hooks/wording';
import GameContext, { Teams } from 'hooks/game';

import scale from 'static/scale';
import theme from 'static/theme';

import {
  PlayContainer,
  BottomContainer,
} from './TeamGameStyle';

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
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);

  const sortWinner = (): Teams[] => {
    let tmp: Teams[] = [];

    for (let i = 0; i < gameContext.game.teams.length; i++)
      tmp.push(JSON.parse(JSON.stringify(gameContext.game.teams[i])));
    tmp.sort((a, b) => b.points - a.points);
    return tmp;
  }

  const playNextRound = (): void => {
    setStart(true);
    gameContext.setGame({ ...gameContext.game, displayRanking: false })
  }

  const ranks: Teams[] = sortWinner();
  const rank = [
    wordingContext.wording.pos.first,
    wordingContext.wording.pos.second,
    wordingContext.wording.pos.third,
    wordingContext.wording.pos.other,
  ]

  return (
    <>
      <PlayContainer>
        <FlatList
          data={ranks}
          keyExtractor={item => (item.number + item.points).toString()}
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
                {`${wordingContext.wording.game.team} ${item.number}`}
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
          onPress={() => playNextRound()}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.next}
        />
      </BottomContainer>
    </>
  );
};

export default Ranking;
