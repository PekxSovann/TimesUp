import styled from 'styled-components/native';

import Text from 'components/Text';

import theme from 'static/theme';
import scale from 'static/scale';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

const SplitContainer = styled.View`
  flex: 0.5;
  align-items: center;
`;

const CustomText = styled(Text)`
  margin-left: ${scale(10)}px;
  margin-right: ${scale(10)}px;
  margin-bottom: ${scale(10)}px;
`;

export {
  Container,
  SplitContainer,
  CustomText,
};
