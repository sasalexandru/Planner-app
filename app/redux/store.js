import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers, compose, applyMiddleware} from '@reduxjs/toolkit';
import {createNetworkMiddleware} from 'react-native-offline';
import authReducer from './reducers/authReducer';
import {reducer as network} from 'react-native-offline'
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/saga';
import { composeWithDevTools, composeWithDevToolsLogOnly } from '@redux-devtools/extension';




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
  actionTypes: [],
});
let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const rootReducer = combineReducers({
    auth: authReducer,
    network: network
  });
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [networkMiddleware,sagaMiddleware];

const store = configureStore({reducer: persistedReducer,middleware: middleware,});
sagaMiddleware.run(rootSaga);
export default store;

export const persistor = persistStore(store);
