/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/screens/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
