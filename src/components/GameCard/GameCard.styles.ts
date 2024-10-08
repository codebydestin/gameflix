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
    ratingView: {
      backgroundColor: '#FF4545',
      width: 44,
      height: 44,
      alignSelf: 'flex-end',
      marginRight: 8,
      zIndex: 999,
      position: 'absolute',
      right: 4,
      bottom: 8,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rating: {
      color: 'white',
      fontWeight: '700',
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
