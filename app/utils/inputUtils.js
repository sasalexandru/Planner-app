import {InputTypes} from '../constants/enums';

export const emailValidation = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (email === '') {
    return 'Cannot be empty!';
  } else if (reg.test(email) === false) {
    return 'Incorrent email address!';
  } else {
    return;
  }
};

export const passwordValidation = password => {
  let oneUpper = /(?=.*[A-Z])/;
  let oneDigit = /(?=.*[0-9])/;

  console.log(password);

  if (password.length <= 6) {
    return 'Too short!';
  } else if (password === '') {
    return 'Password required!';
  } else if (!password.match(oneUpper)) {
    return 'Required at least one uppercase!';
  } else if (!password.match(oneDigit)) {
    return 'Required at least one digit!';
  } else {
    return '';
  }
};
