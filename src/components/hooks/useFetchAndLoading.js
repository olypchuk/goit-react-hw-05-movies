import { useState,useEffect } from "react";
const useFetchAndLoading = (fetch, urlId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(urlId);
        setData(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [fetch, urlId]);

  return { data, isLoading };
};
export default useFetchAndLoading
