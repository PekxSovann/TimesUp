import React, { useContext } from 'react';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import WordingContext from 'hooks/wording';
import GameContext from 'hooks/game';

import {
  LeftContainer,
  TeamContainer
} from './TeamGameStyle';

const LeftInfo = (): JSX.Element => {
  const wordingContext = useContext(WordingContext);
  const gameContext = useContext(GameContext);

  return (
    <LeftContainer>
      {!gameContext.game.displayRanking && (
        <TeamContainer>
          <Text
            style={{ textAlign: 'center' }}
            font={ElementType.NORMAL}
            size={SizeType.SMALL}
          >
            {`${wordingContext.wording.game.team} ${gameContext.game.currentTeam + 1}`}
          </Text>

          <Text
            style={{ textAlign: 'center' }}
            font={ElementType.NORMAL}
            size={SizeType.SMALL}
          >
            {`${wordingContext.wording.game.points}: ${gameContext.game?.teams[gameContext.game.currentTeam]?.points}`}
          </Text>
        </TeamContainer>
      )}
    </LeftContainer>
  );
};

export default LeftInfo;
