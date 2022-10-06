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
          borderColor: isInputSelected ? Colors.primaryColor : 'white',
          color: 'white',
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        selectionColor="white"
        editable={editable}
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
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'transparent',
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
