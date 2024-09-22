import React from 'react';
import useHomeStyles from './home.styles';
import { ScrollView, View } from 'react-native';
import useGameList from '../../hooks/useGameList';
import GameCard from '../../components/GameCard';

const HomeScreen = (): JSX.Element => {
  const [results] = useGameList();
  const styles = useHomeStyles();

  return (
    <ScrollView>
      <View style={styles.container}>
        {results?.map(game => (
          <GameCard key={game.slug} game={game} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
