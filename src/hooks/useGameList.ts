import {useEffect, useState} from 'react';
import client from '../client/client';

export default () => {
  const [results, setResults] = useState(null);

  const fetchGameList = async () => {
    setResults(null);

    try {
      const {data} = await client.get('/api/games', {
        params: {
          key: '6414ec556cba4050be243e3c6210f3de',
          page_size: 40,
        },
      });
      setResults(data.results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchGameList();
  }, []);

  return [results];
};
