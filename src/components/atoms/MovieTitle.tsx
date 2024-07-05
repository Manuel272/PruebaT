import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface MovieTitleProps {
  label: string;
}

const MovieTitle = ({label}: MovieTitleProps) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MovieTitle;
