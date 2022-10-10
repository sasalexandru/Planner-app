import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../constants/colors';
import {TextValues} from '../constants/textValues';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {passwordValidation} from '../utils/inputUtils';

PasswordTextInput = ({
  label = '',
  placeholder = '',
  inputStyle,
  labelStyle,
  errorStyle,
  onChangeText,
  numberOfLines = 1,
  multiline = false,
  editable = true,
  keyboardType = 'default',
}) => {
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{width: '100%'}}>
      <Text style={{...styles.labelTextStyle, ...labelStyle}}>{label}</Text>
      <View
        style={{
          ...styles.container,
          borderColor: isInputSelected ? Colors.primaryColor : '#36454f',
          color: 'white',
        }}>
        <TextInput
          style={{...styles.inputStyle, ...inputStyle, color: 'white'}}
          placeholder={placeholder}
          keyboardType={keyboardType}
          selectionColor="white"
          secureTextEntry={isVisible}
          editable={editable}
          numberOfLines={numberOfLines}
          multiline={multiline}
          onFocus={() => setIsInputSelected(true)}
          onBlur={() => {
            setIsInputSelected(false);
            const error = passwordValidation(textInput);
            setErrorMessage(error);
          }}
          onChangeText={text => {
            setTextInput(text);
            onChangeText(text);
          }}></TextInput>
        <Pressable onPress={() => setIsVisible(!isVisible)}>
          <Icon
            name={isVisible ? 'eye-off' : 'eye'}
            size={25}
            style={{
              color: 'white',
              marginHorizontal: 5,
            }}></Icon>
        </Pressable>
      </View>
      {errorMessage && (
        <Text style={{...styles.errorMessageStyle, errorStyle}}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default PasswordTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#343434',
    width: '100%',
    fontSize: TextValues.textSize,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    height: 40,
    fontSize: TextValues.textSize,
    paddingHorizontal: 5,
  },
  labelTextStyle: {
    height: TextValues.labelSize,
    color: Colors.whiteColor,
    marginVertical: 5,
  },
  errorMessageStyle: {
    color: Colors.errorColor,
    marginVertical: 5,
    marginLeft: 5,
  },
});
