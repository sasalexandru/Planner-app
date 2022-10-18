import {LOGIN, REGISTER} from '../actionTypes/actionTypes';

export function login(userCredentials) {
  return {
    type: LOGIN,
    userCredentials: userCredentials,
  };
}

export function register(userCredentials) {
  return {
    type: REGISTER,
    userCredentials: userCredentials,
  };
}
