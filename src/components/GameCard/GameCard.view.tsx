import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import useGameCardStyles from './GameCard.styles';
import { GFGame } from '../../types/GFGame';

interface Props {
  game: GFGame;
}
const GameCardView: FC<Props> = ({ game }) => {
  const styles = useGameCardStyles();
  const { rating, background_image, name, released } = game;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.ratingView}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Image source={{ uri: background_image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.date}>{released}</Text>
    </View>
  );
};

export default GameCardView;
