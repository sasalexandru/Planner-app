/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store, { persistor } from './app/redux/store';
import {NetworkProvider} from 'react-native-offline';
import {PersistGate} from 'redux-persist/integration/react';

const reduxApp = () => (
  <Provider store={store}>
    <NetworkProvider>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </NetworkProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxApp);
