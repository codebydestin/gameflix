import React, { FC, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import useFilterStyles from './GFFilter.styles';
import { GFGenre } from '../../types/GFGame';

interface Props {
  genres: GFGenre[];
  onSelectTab: (genre: GFGenre) => void;
}

export const GFFilterView: FC<Props> = ({ genres, onSelectTab }) => {
  const styles = useFilterStyles();
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.activeTab}>
          <Text style={styles.text}>All Grenres</Text>
        </Pressable>
        {genres?.map((genre, index) => (
          <Pressable
            key={genre.slug}
            style={index === active ? styles.activeTab : styles.tab}
            onPress={() => {
              onSelectTab(genre);
              setActive(index);
            }}>
            <Text style={styles.text}>{genre.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
