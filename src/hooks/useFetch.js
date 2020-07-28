import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState('https://pokeapi.co/api/v2');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const json = await result.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return [data, setUrl];
};

export default useFetch;
