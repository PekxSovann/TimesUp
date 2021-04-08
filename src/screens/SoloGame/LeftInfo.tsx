import React, { useContext } from 'react';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

import {
  LeftContainer,
  TeamContainer
} from './SoloGameStyle';

const LeftInfo = (): JSX.Element => {
  const wordingContext = useContext(WordingContext);
  const gameContext = useContext(GameContext);

  const getNextPlayer = (): number => {
    if ((gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length === gameContext.solo.clueGiver)
      return ((gameContext.solo.currentPlayer + 2) % gameContext.solo.players.length);
    return (gameContext.solo.currentPlayer + 1) % gameContext.solo.players.length;
  }

  return (
    <LeftContainer>
      <TeamContainer>
        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.SEMIBOLD}
          size={SizeType.SMALL}
        >
          {wordingContext.wording.game.clueGiver}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {gameContext.solo.players[gameContext.solo.clueGiver]?.name}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {`${wordingContext.wording.game.points}: ${gameContext.solo.players[gameContext.solo.clueGiver]?.points}`}
        </Text>
      </TeamContainer>

      <TeamContainer>
        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.SEMIBOLD}
          size={SizeType.SMALL}
        >
          {wordingContext.wording.game.guesser}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {gameContext.solo.players[gameContext.solo.currentPlayer]?.name}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {`${wordingContext.wording.game.points}: ${gameContext.solo.players[gameContext.solo.currentPlayer]?.points}`}
        </Text>
      </TeamContainer>

      <TeamContainer>
        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.SEMIBOLD}
          size={SizeType.SMALL}
        >
          {wordingContext.wording.game.next}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {gameContext.solo.players[getNextPlayer()]?.name}
        </Text>

        <Text
          style={{ textAlign: 'center' }}
          font={ElementType.NORMAL}
          size={SizeType.VERYSMALL}
        >
          {`${wordingContext.wording.game.points}: ${gameContext.solo.players[getNextPlayer()]?.points}`}
        </Text>
      </TeamContainer>
    </LeftContainer>
  );
};

export default LeftInfo;
