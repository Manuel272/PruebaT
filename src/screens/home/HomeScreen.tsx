import React from 'react';
import {Text, View} from 'react-native';
import MovieCardsContainer from '../../components/organisms/MovieCardsContainer';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <MovieCardsContainer />
    </View>
  );
};

export default HomeScreen;
