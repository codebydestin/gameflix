import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useHomeStyles = () => {
  const stylesheet = StyleSheet.create({
    container: {
      backgroundColor: '#0c0e13',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useHomeStyles;
