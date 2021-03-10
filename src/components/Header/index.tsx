import React from 'react';

import {
  SettingsContainer,
  SettingsLogo,
  QuitLogo,
  SettingButton,
} from './HeaderStyle';

export interface HeaderProps {
  haveReturn?: boolean;
  settingFct: () => void;
  returnFct?: () => void;
}

const Header = (props): JSX.Element => {
  const {
    haveReturn = false,
    settingFct,
    returnFct = () => console.log('return'),
  } = props;

  return (
    <SettingsContainer>
      {haveReturn && (
        <SettingButton onPress={returnFct}>
          <QuitLogo width={'100%'} height={'100%'}/>
        </SettingButton>
      )}

      <SettingButton onPress={settingFct}>
        <SettingsLogo width={'100%'} height={'100%'}/>
      </SettingButton>
    </SettingsContainer>
  );
};

export default Header;
