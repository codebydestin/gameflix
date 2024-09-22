import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

const useGameCarouselStyles = () => {
  const { width } = useWindowDimensions();

  const stylesheet = StyleSheet.create({
    container: {
      width: width,
      height: 240,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useGameCarouselStyles;
