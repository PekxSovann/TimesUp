import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import PreGameHeader from 'components/PreGameHeader';
import GameSettingComponent from 'components/GameSettingComponent';
import LinearGradientButton from 'components/GradientButton';
import { style, textProps, gradientStyle } from 'components/SettingModal/SettingModalStyle';

import { Player } from 'types';

import GameContext, { Teams } from 'hooks/game';
import WordingContext from 'hooks/wording';
import WordContext from 'hooks/words';
import PlayerContext from 'hooks/players';

import {
  Container,
  OptionContainer,
  ButtonContainer
} from './GameSettingsStyle';

const GameSettings = (): JSX.Element => {
  const navigation = useNavigation();
  const gameContext = useContext(GameContext);
  const playerContext = useContext(PlayerContext);
  const wordContext = useContext(WordContext);
  const wordingContext = useContext(WordingContext);
  const [text, setText] = useState('');
  const [game, setGame] = useState({
    chrono: 60,
    words: 20,
    currentWord: 0,
    round: 0,
    numberOfTeam: 2,
    memberPerTeam: playerContext.playerList.length / 2,
    roundStart: false,
    currentTeam: 0,
    displayRanking: false,
    gameWords: [],
    wordToFind: [],
  });

  const getNumberPerTeam = (): void => {
    if (playerContext.playerList.length % game.numberOfTeam !== 0) {
      setText(`And one team of ${-Math.round(-(playerContext.playerList.length / game.numberOfTeam)) + 1}`);
    }
  }

  const confirmSettings = (): void => {
    const tmp: Player[] = [];
    const teams: Teams[] = [];
    let pos = 0;

    for (let i = 0; i < playerContext.playerList.length; i++)
      tmp.push(playerContext.playerList[i]);
    while (tmp.length > 0) {
      pos = Math.floor(Math.random() * tmp.length);
      if (teams.length < game.numberOfTeam) {
        teams.push({
          points: 0,
          members: [],
          number: teams.length + 1,
        });
        teams[teams.length - 1].members.push(tmp[pos]);
      } else
        teams[tmp.length % game.numberOfTeam].members.push(tmp[pos]);
      tmp.splice(pos, 1);
    }
    gameContext.setGame({ teams, ...game });
    navigation.navigate('TeamVerification');
  }

  useEffect(() => {
    getNumberPerTeam();
  }, [game])

  return (
    <Container>
      <PreGameHeader />

      <OptionContainer>
        <GameSettingComponent
          incrementFct={(number: number) => setGame({ ...game, ['numberOfTeam']: number })}
          stopIncCdt={game.numberOfTeam >= -Math.round(-(playerContext.playerList.length / 2))}
          stopDctCdt={game.numberOfTeam === 2}
          value={Math.round(game.numberOfTeam)}
          text={wordingContext.wording.gameSettings.team}
          subText={''}
        />

        <GameSettingComponent
          incrementFct={(number: number) => setGame({ ...game, ['memberPerTeam']: number })}
          stopIncCdt={true}
          stopDctCdt={true}
          value={-Math.round(-(playerContext.playerList.length / game.numberOfTeam))}
          text={wordingContext.wording.gameSettings.memberPerTeam}
          subText={text}
        />

        <GameSettingComponent
          incrementFct={(number: number) => setGame({ ...game, ['chrono']: number })}
          stopIncCdt={game.chrono > 998}
          stopDctCdt={game.chrono <= 5}
          value={game.chrono}
          text={wordingContext.wording.gameSettings.chrono}
          subText={''}
        />

        <GameSettingComponent
          incrementFct={(number: number) => setGame({ ...game, ['words']: number })}
          stopIncCdt={game.words >= wordContext.wordList.length + wordContext.wordPersoList.length}
          stopDctCdt={game.words <= wordContext.wordPersoList.length + 1}
          value={game.words}
          text={wordingContext.wording.gameSettings.word}
          subText={''}
        />
      </OptionContainer>

      <ButtonContainer>
        <LinearGradientButton
          onPress={() => confirmSettings()}
          style={style}
          textProps={textProps}
          gradientStyle={gradientStyle}
          label={wordingContext.wording.buttons.create}
        />
      </ButtonContainer>
    </Container>
  );
};

export default GameSettings;
