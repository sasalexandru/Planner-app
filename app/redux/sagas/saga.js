import { networkSaga } from 'react-native-offline';
import {all, fork} from 'redux-saga/effects'


export default function* rootSaga(){
    yield all([fork(networkSaga, {pinkInterval: 30000})]);
}
