import React, { useEffect, useState } from 'react';
import useHomeStyles from './home.styles';
import { ScrollView, Text, View } from 'react-native';
import useGameList from '../../hooks/useGameList';
import GameCard from '../../components/GameCard';
import { GFGame, GFGenre } from '../../types/GFGame';
import GameCarousel from '../../components/GameCarousel';
import { GFFilterView } from '../../components/GFFilter/GFFilter.view';

const HomeScreen = (): JSX.Element => {
  const [results, topResults, genres] = useGameList();
  const [games, setGames] = useState<GFGame[] | null>();
  const [activeGenre, setActiveGenre] = useState<GFGenre | null>(null);
  const styles = useHomeStyles();

  useEffect(() => {
    setGames(results as GFGame[]);
  }, [results]);

  useEffect(() => {
    const filteredGames: GFGame[] = results?.filter(game =>
      game.genres.some((genre: GFGame) => genre.id === activeGenre?.id),
    );
    setGames(filteredGames);
  }, [activeGenre, results]);

  return (
    <ScrollView style={styles.scrollView}>
      {results?.length && (
        <>
          <Text style={styles.headerTitle}>Highest Rated</Text>
          <GameCarousel data={(topResults as GFGame[]) || undefined} />
          <Text style={styles.headerTitle}>Popular Games</Text>
          <GFFilterView
            genres={(genres as GFGenre[]) || undefined}
            onSelectTab={setActiveGenre}
          />
          <View style={styles.container}>
            {results?.map(game => (
              <GameCard key={game.slug} game={game as GFGame} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
