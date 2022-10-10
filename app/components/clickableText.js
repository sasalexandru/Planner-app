import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Colors } from '../constants/colors';
import { TextValues } from '../constants/textValues';

const ClickableText = ({text, onPress}) => {
  return <View>
    <Text style={styles.textStyle} onPress={onPress}>{text}</Text>
  </View>;
};

export default ClickableText;

const styles = StyleSheet.create({
    textStyle:{
        color: Colors.whiteColor,
        fontSize: TextValues.smallText,
        marginTop: 5,
        alignSelf: 'flex-end'
    }
});
