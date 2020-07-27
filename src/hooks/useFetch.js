import { useState, useEffect } from 'react';

const useFetch = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await fetch(url, options);
              const json = await res.json();
              setResponse(json);
          } catch()
      }
  })        

  return response;
};

export default useFetch;
