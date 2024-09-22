import React, { FC } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import Carousel from 'react-native-reanimated-carousel';
import { GFGame } from '../../types/GFGame';
import CarouselCard from '../CarouselCard';
import useGameCarouselStyles from './GameCarousel.styles';

const viewCount = 5;

interface Props {
  data?: GFGame[];
}

export const GameCarouselView: FC<Props> = ({ data }) => {
  const progress = useSharedValue<number>(0);
  const { width } = useWindowDimensions();
  const styles = useGameCarouselStyles();

  return (
    <View>
      {data && (
        <Carousel
          style={styles.container}
          width={width}
          height={210}
          data={data}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          mode="horizontal-stack"
          modeConfig={{
            snapDirection: 'left',
            stackInterval: data.length,
          }}
          customConfig={() => ({ type: 'positive', viewCount })}
          snapEnabled={true}
          loop={true}
          renderItem={({ index }) => <CarouselCard game={data[index]} />}
        />
      )}
    </View>
  );
};

export default GameCarouselView;
