/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomTextInput from './app/components/customTextInput';
import PasswordTextInput from './app/components/passwordTextInput';
import {Colors} from './app/constants/colors';

const App = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.scrollViewStyle}>
      <CustomTextInput label={'Email'}></CustomTextInput>
      <PasswordTextInput label={'Password'}></PasswordTextInput>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle:{
    flex: 1,
    marginHorizontal: 20,
  }
});

export default App;
