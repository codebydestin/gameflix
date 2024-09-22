import { useEffect, useState } from 'react';
import client from '../client/client';
import { ApiResponse, GFGame, GFGenre } from '../types/GFGame';

export default () => {
  const [results, setResults] = useState<GFGame[] | null>(null);
  const [topResults, setTopResults] = useState<GFGame[] | null>(null);
  const [genres, setGenres] = useState<GFGenre[] | null>(null);

  const fetchGameList = async () => {
    setResults(null);
    setTopResults(null);

    try {
      const { data } = await client.get<ApiResponse>('/api/games', {
        params: {
          key: '6414ec556cba4050be243e3c6210f3de',
          page_size: 40,
        },
      });
      setResults(data.results);

      // Set top results
      const sortedResults = [...data.results]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
      setTopResults(sortedResults);

      // Set All Genres
      const uniqueGenres: GFGenre[] = Array.from(
        new Map(
          [...data.results]
            .flatMap(game => game.genres)
            .map(genre => [genre.id, genre]), // Map by genre.id to ensure uniqueness
        ).values(),
      );
      setGenres(uniqueGenres);
    } catch (err) {}
  };

  useEffect(() => {
    fetchGameList();
  }, []);

  return [results, topResults, genres];
};
