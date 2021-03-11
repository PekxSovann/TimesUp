import React, { useContext, useState } from 'react';

import Text from 'components/Text';

import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

import theme from 'static/theme';
import scale from 'static/scale';

import { ElementType, SizeType } from 'types';

import {
  PlayContainer,
  BottomContainer,
  Play,
  PlayButton,
  Countdown,
} from './TeamGameStyle';

interface Start {
  start?: boolean;
  setStarts: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartingRound = (props: Start): JSX.Element => {
  const { start = false, setStarts } = props
  const gameContext = useContext(GameContext);
  const wordingContext = useContext(WordingContext);
  const [isStart, setStart] = useState(start);
  const rules = [
    wordingContext.wording.round.firstRule,
    wordingContext.wording.round.secondRule,
    wordingContext.wording.round.lastRule,
  ]

  return (
    <>
      <PlayContainer>
        {isStart ? (
          <Countdown
            size={scale(125)}
            style={{ height: '50', width: '50' }}
            isPlaying
            duration={10}
            trailColor={theme.grey}
            colors={theme.white}
            onComplete={() => {
              setStarts(false);
              gameContext.setGame({ ...gameContext.game, roundStart: true })
            }}
          >
            {({ remainingTime }) => {
              return (
                <Text
                  font={ElementType.BOLD}
                  size={SizeType.BIG}
                  style={{ textAlign: 'center' }}
                >
                  {remainingTime}
                </Text>
              )
            }}
          </Countdown>
        ) : (
          <PlayButton onPress={() => setStart(true)}>
            <Play width="100%" height="100%" />
          </PlayButton>
        )}
      </PlayContainer>

      <BottomContainer>
        <Text
          font={ElementType.BOLD}
          size={SizeType.SMALL}
          color={theme.grey}
          style={{ textAlign: 'center' }}
        >
          {rules[gameContext.game.round]}
        </Text>
      </BottomContainer>
    </>
  );
};

export default StartingRound;
