import React, { useState, useContext } from 'react';
import { Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import useModalVisibility from 'hooks/modal';
import PlayersContext from 'hooks/players';
import WordsContext from 'hooks/words';
import useLoading from 'hooks/loader';

import theme from 'static/theme';

import Logo from 'assets/Logo.svg';

import Header from 'components/Header';
import SettingModal from 'components/SettingModal';

import {
  Container,
  LogoContainer,
  ListContainer,
} from './HomeStyle';
import HomeBottomPage from './HomeBottomPage';
import ListPlayer from './ListPlayer';
import ListWord from './ListWord';
import Selection from './Selection';

const HomePage = ({ navigation }) => {
  const [selection, setSelection] = useState(true);
  const [input, setInput] = useState('');
  const { loading, setLoading } = useLoading();
  const playerContext = useContext(PlayersContext);
  const wordContext = useContext(WordsContext);
  const { modalVisible, setVisibility } = useModalVisibility();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView>
          <Header settingFct={() => setVisibility(true)} />

          <LogoContainer>
            <Logo width={'80%'} height={'80%'} />
          </LogoContainer>

          <Selection
            selection={selection}
            setSelection={setSelection}
            setInput={setInput}
          />

          <ListContainer>
            {selection ?
              ( <ListPlayer list={playerContext.playerList} deleteItem={playerContext.deletePlayer} load={setLoading} /> )
            :
              ( <ListWord list={wordContext.wordPersoList} deleteItem={wordContext.deleteWord} load={setLoading} /> )
            }
          </ListContainer>

          <HomeBottomPage
            selection={selection}
            input={input}
            addWord={wordContext.addWord}
            addPlayer={playerContext.addPlayer}
            setInput={setInput}
            navigation={navigation}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: theme.white }}
      />

      <SettingModal modalVisible={modalVisible} setVisibility={setVisibility} />
    </Container>
  );
};

export default HomePage;