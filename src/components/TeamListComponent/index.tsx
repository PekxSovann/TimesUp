import React, { useContext } from 'react';

import Text from 'components/Text';

import { ElementType, SizeType } from 'types';

import theme from 'static/theme';

import WordingContext from 'hooks/wording';
import { Teams } from 'hooks/game';

import {
  Container,
  TitleContainer,
  MemberContainer,
} from './TeamListComponentStyle';

export interface TeamListComponentProps {
  index: number;
  members: Teams;
}

const TeamListComponent = (props: TeamListComponentProps): JSX.Element => {
  const { index, members } = props;
  const wordingContext = useContext(WordingContext);

  return (
    <Container>
      <TitleContainer>
        <Text
          font={ElementType.BOLD}
          size={SizeType.BIG}
          color={theme.black}
        >
          {`${wordingContext.wording.game.team} ${index + 1}`}
        </Text>
      </TitleContainer>

      <MemberContainer>
        <Text
          font={ElementType.SEMIBOLD}
          size={SizeType.NORMAL}
          color={theme.black}
        >
          {`${wordingContext.wording.gameSettings.member}:`}
        </Text>

        {
          members.members.map((item): JSX.Element => (
            <Text
                key={item.name}
                font={ElementType.SEMIBOLD}
                size={SizeType.NORMAL}
                color={theme.black}
              >
                {` - ${item.name}`}
              </Text>
          ))
        }
      </MemberContainer>
    </Container>
  );
};

export default TeamListComponent;
