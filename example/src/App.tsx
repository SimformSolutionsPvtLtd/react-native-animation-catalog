import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './navigation/Routes';
import applicationStyle from './theme/ApplicationStyle';

const App = () => {
  return (
    <GestureHandlerRootView style={applicationStyle.screen}>
      <SafeAreaView style={applicationStyle.screen}>
        <Routes />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
