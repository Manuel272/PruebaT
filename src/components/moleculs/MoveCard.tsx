import React from 'react';
import {Text, View} from 'react-native';
import {Movie} from '../../hooks/useMovieCardsContainer';
import MovieImage from '../atoms/MovieImage';
import MovieTitle from '../atoms/MovieTitle';

interface MoveCardProps {
  movie: Movie;
}

const MoveCard = ({movie}: MoveCardProps) => {
  return (
    <View>
      <MovieImage movieUrl={movie.backdrop_path} />
      <MovieTitle label={movie.title} />
      <Text>{movie.overview}</Text>
    </View>
  );
};

export default MoveCard;
