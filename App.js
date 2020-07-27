/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Chessboard from './source/containers/chessboard';
import { SafeAreaView } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
        <Chessboard/>
    </>
  );
};


export default App;
