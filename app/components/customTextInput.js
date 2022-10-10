import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {TextValues} from '../constants/textValues';

CustomTextInput = ({
  label = 'Label',
  placeholder = '',
  inputStyle,
  labelStyle,
  errorStyle,
  onChangeText,
  numberOfLines = 1,
  multiline = false,
  editable = true,
  keyboardType = 'default',
  inputChecker,
}) => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <View style={{width: '100%'}}>
      <Text style={{...styles.labelTextStyle, ...labelStyle}}>{label}</Text>
      <TextInput
        style={{
          ...styles.textInputStyle,
          ...inputStyle,
          borderColor: isInputSelected ? Colors.primaryColor : '#36454f',
          color: 'white',
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        selectionColor="white"
        editable={editable}
        secureTextEntry={false}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onFocus={() => setIsInputSelected(true)}
        onBlur={() => {
            setIsInputSelected(false);
            if(inputChecker){
                const error = inputChecker(textInput);
                setErrorMessage(error);
            }
        }}
        onChangeText={(text) => {
            onChangeText(text);
            setTextInput(text);
        }}></TextInput>
      {errorMessage && (
        <Text style={{...styles.errorMessageStyle,...errorStyle}}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#343434',
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
