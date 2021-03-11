import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';

import PlayersContext from 'hooks/players';

import theme from 'static/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const Rules = (): JSX.Element => {
  const playerContext = useContext(PlayersContext);

  return (
    <Container />
  );
};

export default Rules;
