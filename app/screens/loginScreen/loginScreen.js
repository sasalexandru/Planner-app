import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import ClickableText from '../../components/clickableText';
import CustomSubmitButton from '../../components/customSubmitButton';
import CustomTextInput from '../../components/customTextInput';
import PasswordTextInput from '../../components/passwordTextInput';
import {TextValues} from '../../constants/textValues';
import {emailValidation} from '../../utils/inputUtils';
import imageAsset from '../../assets/subject.png';
const LoginScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/subject.png')}
        style={{height: 150}}
        resizeMode="contain"></ImageBackground>
      <View>
        <Text style={styles.titleTextStyle}>
          {isLogin ? 'Login' : 'Register'}
        </Text>
      </View>
      <View>
        {!isLogin && (
          <CustomTextInput
            label={'First Name'}
            placeholder={'Introduce your first name'}
            onChangeText={() => {}}></CustomTextInput>
        )}
        {!isLogin && (
          <CustomTextInput
            label={'Last Name'}
            placeholder={'Introduce your last name'}
            onChangeText={() => {}}></CustomTextInput>
        )}
        <CustomTextInput
          label={'Email'}
          placeholder={'Introduce your email address'}
          onChangeText={() => {}}
          inputChecker={emailValidation}></CustomTextInput>
        <PasswordTextInput
          label={'Password'}
          placeholder={'Introduce your password'}
          onChangeText={() => {}}></PasswordTextInput>
        <ClickableText
          text={
            isLogin
              ? `Don't have an account? Sign up!`
              : 'Already have an account?'
          }
          onPress={() => setIsLogin(!isLogin)}></ClickableText>
      </View>
      <View>
        <CustomSubmitButton
          onSubmit={() => {
            setIsLoading(!isLoading);
          }}
          text={'Login'}
          isLoading={isLoading}></CustomSubmitButton>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  titleTextStyle: {
    color: 'white',
    fontSize: TextValues.titleSize,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
