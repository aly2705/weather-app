import { useState, useCallback } from "react";

const useHTTP = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (reqURL, processDataFn) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(reqURL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      processDataFn(data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, error, isLoading, setError };
};

export default useHTTP;
