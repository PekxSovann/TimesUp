import React, { useContext } from 'react';
import styled from 'styled-components/native';

import PlayersContext from 'hooks/players';

import theme from 'static/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const GameChoice = (): JSX.Element => {
  const playerContext = useContext(PlayersContext);

  console.log(playerContext.playerList);
  return (
    <Container />
  );
};

export default GameChoice;
