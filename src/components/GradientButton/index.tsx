import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'components/Text';

import { GradientButtonProps, ButtonGradientStyle, GradientStyle } from 'types';
import theme from 'static/theme';

const Container = styled.TouchableOpacity<ButtonGradientStyle>`
  width: ${(props): number => props.buttonWidth}px;
  height: ${(props): number => props.buttonHeight}px;
  border-radius:${(props): number => props.borderRadius}px;
  border-width: ${(props): number => props.borderWidth}px;
  border-color: ${(props): string => props.borderColor ? props.borderColor : '#000000'};
`;

const GradiantContainer = styled(LinearGradient)<GradientStyle>`
  flex: 1;
  border-radius: ${(props): number => props.borderRadius}px;
  justify-content: ${(props): string => props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${(props): string => props.alignItems ? props.alignItems : 'flex-start'};
`;

/**
 * Linear-gradient button
 * Example to copy:
    <LinearGradientButton
      onPress={info}
      colorInit={info}
      colorEnd={info}
      buttonWidth={info}
      buttonHeight={info}
      borderRadius={info}
      borderWidth={info}
      borderColor={info}
      justifyContent={info}
      alignItems={info}
      textSize={info}
      textColor={info}
      textWeight={info}
      label={info}
    />
 *
 */

const LinearGradientButton = (props: GradientButtonProps): JSX.Element => {
  const {
    onPress,
    style,
    gradientStyle,
    label,
    textProps,
  } = props;

  return (
    <Container
      onPress={() => { onPress() }}
      buttonWidth={style.buttonWidth}
      buttonHeight={style.buttonHeight}
      borderRadius={style.borderRadius}
      borderColor={style.borderColor}
      borderWidth={style.borderWidth}
    >
      <GradiantContainer
        borderRadius={gradientStyle.borderRadius}
        justifyContent={gradientStyle.justifyContent}
        alignItems={gradientStyle.alignItems}
        colors={theme.gradients}
      >
        <Text
          size={textProps.size}
          color={textProps.color}
          font={textProps.font}
          style={textProps.style}
        >
          {label}
        </Text>
      </GradiantContainer>
    </Container>
  )
}

export default LinearGradientButton;