import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import useGameCardStyles from './CarouselCard.styles';
import { GFGame } from '../../types/GFGame';

interface Props {
  game: GFGame;
}
const CarouselCardView: FC<Props> = ({ game }) => {
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
      <View style={styles.textView}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{released}</Text>
      </View>
    </View>
  );
};

export default CarouselCardView;
