/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Chessboard from './source/containers/chessboard';
import store from './source/redux/store';
import { Provider } from 'react-redux';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Chessboard />
      </Provider>
    </>
  );
};

export default App;
