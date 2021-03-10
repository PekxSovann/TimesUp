import { Dimensions, Platform } from 'react-native';

/**
 * Function : pixelScale
 * Description : Scale a number with a cross multiplication based on the dimensions of the iPhone 6.
 * Params: number -> the number to scale
 * max -> If you don't want to scale too much
 **/

const scale = (number: number, max?: number): number => {
  let dimension = Dimensions.get('window').width;
  if (dimension > Dimensions.get('window').height)
    dimension = Dimensions.get('window').height;
  if (Platform.OS === 'ios') {
    const a = (number * dimension) / 375;
    return Math.round(max && a > max ? max : a);
  } else {
    const b = (number * dimension) / 375;
    return Math.round(max && b > max ? max : b);
  }
}

export default scale;
