import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

const useCarouselCardStyles = () => {
  const { width } = useWindowDimensions();

  const stylesheet = StyleSheet.create({
    container: {
      marginHorizontal: 8,
      overflow: 'hidden',
      width: width - 16,
    },
    imageContainer: {
      overflow: 'hidden',
      borderRadius: 12,
    },
    image: {
      width: width,
      height: 210,
      resizeMode: 'cover',
    },
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      textTransform: 'capitalize',
      marginVertical: 4,
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
      top: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rating: {
      color: 'white',
      fontWeight: '700',
    },
    textView: {
      position: 'absolute',
      bottom: 8,
      left: 16,
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useCarouselCardStyles;
