import styled from 'styled-components/native';

import scale from 'static/scale';

import Text from 'components/Text';

const Container = styled.View`
  flex: 0.5;
  background-color: #fff;
  border-radius: ${scale(10)}px;
`;

const ModalText = styled(Text)`
  margin-top: ${scale(5)}px;
  margin-left: ${scale(10)}px;
`;

export {
  Container,
  ModalText
};
