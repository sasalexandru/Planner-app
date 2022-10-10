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

import LoginScreen from './app/screens/loginScreen/loginScreen';


const App = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.scrollViewStyle}>
      <LoginScreen></LoginScreen>

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
