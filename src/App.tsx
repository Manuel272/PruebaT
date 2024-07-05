import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MovieNavigation} from './navigation/MovieNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MovieNavigation />
    </NavigationContainer>
  );
};

export default App;
