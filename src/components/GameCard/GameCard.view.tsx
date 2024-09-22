import React from 'react';
import { Image, Text, View } from 'react-native';
import useGameCardStyles from './GameCard.styles';

const GameCardView = ({ game }) => {
  const styles = useGameCardStyles();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: game.background_image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.date}>{game.released}</Text>
    </View>
  );
};

export default GameCardView;
