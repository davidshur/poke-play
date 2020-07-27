import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

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
