import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {TextValues} from '../constants/textValues';
import Icon from 'react-native-vector-icons/FontAwesome';

PasswordTextInput = ({
  label = 'Label',
  placeholder = '',
  inputStyle,
  labelStyle,
  errorStyle,
  onChangeText,
  numberOfLines = 1,
  errorMessage = null,
  multiline = false,
  editable = true,
  keyboardType = 'default',
  isPasswordVisible = false,
}) => {
  const [isInputSelected, setIsInputSelected] = useState(false);

  return (
    <View>
      <Text style={{...styles.labelTextStyle, ...labelStyle}}>{label}</Text>
      <View
        style={{
          ...styles.container,
          borderColor: isInputSelected ? Colors.primaryColor : 'white',
          color: 'white',
        }}>
        <TextInput
          style={{...styles.inputStyle, color: 'white'}}
          placeholder={placeholder}
          keyboardType={keyboardType}
          selectionColor="white"
          secureTextEntry={isPasswordVisible}
          editable={editable}
          numberOfLines={numberOfLines}
          multiline={multiline}
          onFocus={() => setIsInputSelected(true)}
          onBlur={() => setIsInputSelected(false)}
          onChangeText={onChangeText}></TextInput>
        <Icon
          name='eye'
          size={30}
          style={{
            color: 'white',
            marginLeft: 5,
          }}></Icon>
      </View>
      {errorMessage && (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default PasswordTextInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'transparent',
    fontSize: TextValues.textSize,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
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
