import React from 'react';
import useHomeStyles from './home.styles';
import { ScrollView, Text, View } from 'react-native';
import useGameList from '../../hooks/useGameList';
import GameCard from '../../components/GameCard';
import { GFGame } from '../../types/GFGame';
import GameCarousel from '../../components/GameCarousel';

const HomeScreen = (): JSX.Element => {
  const [results] = useGameList();
  const styles = useHomeStyles();

  return (
    <ScrollView style={styles.scrollView}>
      {results?.length && (
        <>
          <GameCarousel data={results?.slice(0, 8) || undefined} />
          <Text style={styles.headerTitle}>Popular Games</Text>
          <View style={styles.container}>
            {results?.map((game: GFGame) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
