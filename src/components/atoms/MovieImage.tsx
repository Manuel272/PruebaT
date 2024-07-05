import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface MovieImageProps {
  movieUrl: string;
}

const MovieImage = ({movieUrl}: MovieImageProps) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.themoviedb.org/t/p/w440_and_h660_face${movieUrl}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
  },
});

export default MovieImage;
