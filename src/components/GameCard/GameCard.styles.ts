import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

const useGameCardStyles = () => {
  const { width } = useWindowDimensions();

  const stylesheet = StyleSheet.create({
    container: {
      marginHorizontal: 8,
      marginVertical: 12,
      overflow: 'hidden',
      width: width / 2 - 16,
    },
    imageContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
    image: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
    },
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      textTransform: 'capitalize',
      marginVertical: 8,
    },
    date: {
      fontStyle: 'italic',
      color: '#FF4545',
      fontSize: 13,
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useGameCardStyles;
