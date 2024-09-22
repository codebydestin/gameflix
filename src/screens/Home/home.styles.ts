import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useHomeStyles = () => {
  const stylesheet = StyleSheet.create({
    scrollView: {
      backgroundColor: '#0c0e13',
    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    headerTitle: {
      color: 'white',
      fontWeight: '700',
      fontSize: 20,
      marginTop: 28,
      marginBottom: 8,
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
