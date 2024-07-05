import React from 'react';
import {FlatList, View} from 'react-native';
import {
  Movie,
  useMovieCardsContainer,
} from '../../hooks/useMovieCardsContainer';
import MoveCard from '../moleculs/MoveCard';

const MovieCardsContainer = () => {
  const {movies} = useMovieCardsContainer();
  console.log(movies);

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item}) => <MoveCard movie={item} />}
        keyExtractor={(item: Movie) => item.id.toString()}
      />
    </View>
  );
};

export default MovieCardsContainer;
