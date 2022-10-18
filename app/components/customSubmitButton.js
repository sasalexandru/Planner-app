import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/colors';
import {TextValues} from '../constants/textValues';
import CustomLoadingIndicator from './customLoadingIndicator';

const CustomSubmitButton = ({
  onSubmit,
  text,
  buttonStyle,
  propTextStyle,
  isDisabled = false,
  isLoading,
  customGradientColors = ['#DA4453', '#89216B'],
}) => {

  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
      }}
      style={{...styles.containerStyle, buttonStyle}}
      disabled={isDisabled}>
      <LinearGradient
        style={styles.linearGradientStyle}
        colors={customGradientColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {isLoading ? (
          <CustomLoadingIndicator></CustomLoadingIndicator>
        ) : (
          <Text style={{...styles.textStyle, propTextStyle}}>
            {text && text}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomSubmitButton;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 15,
    marginBottom: 50,
    height: 50,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: TextValues.textSize,
    color: Colors.whiteColor,
  },
  linearGradientStyle: {
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
  },
});
