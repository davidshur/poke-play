import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);

  useEffect(async () => {
    const res = await fetch(url, options);
    const json = await res.json();
    setResponse(json);
  }, [url]);

  return response;
};

export default useFetch;
