/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from './app/redux/actions/authActions';

import LoginScreen from './app/screens/loginScreen/loginScreen';

class App extends Component {
  render() {
    console.log('ASD');
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollViewStyle}>
        <LoginScreen></LoginScreen>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    marginHorizontal: 20,
  },
});
const mapStateToProps = appState => {
  const store = appState;
  return {store};
};
const mapDispatchToProps = (dispatch) => {
    return {
      login: (userCredentials) => dispatch(login(userCredentials)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(App);
