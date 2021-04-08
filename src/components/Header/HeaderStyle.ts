import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Settings from 'assets/Settings.svg';
import QuitButton from 'assets/QuitButton.svg';

import scale from 'static/scale';

const SettingsContainer = styled.View`
  flex: 0.1;
  flex-direction: row;
  justify-content: flex-end;
  height: ${Dimensions.get('window').height / 12}px;
`;

const SettingsLogo = styled(Settings)`
`;

const QuitLogo = styled(QuitButton)`
`;

const SettingButton = styled.TouchableOpacity`
  height: ${scale(30)}px;
  width: ${scale(30)}px;
  margin-right: ${`${scale(15)}px`};
  margin-top: ${`${scale(15)}px`};
`;

export {
  SettingsContainer,
  SettingButton,
  SettingsLogo,
  QuitLogo,
};
