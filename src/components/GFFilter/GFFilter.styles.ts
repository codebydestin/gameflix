import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useFilterStyles = () => {
  const stylesheet = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 8,
      paddingLeft: 8,
    },
    text: {
      color: 'white',
    },
    activeTab: {
      backgroundColor: '#FF4545',
      marginRight: 4,
      paddingHorizontal: 8,
      borderRadius: 3,
    },
    tab: {
      marginRight: 4,
      paddingHorizontal: 4,
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useFilterStyles;
