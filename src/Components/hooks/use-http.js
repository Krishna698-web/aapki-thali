import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  async function sendRequest(requestConfig, retriveData) {
    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      const data = await response.json();
      retriveData(data);
      //   console.log(data);
    } catch (error) {
      setError(error.message);
      throw new Error();
    }

    setIsLoading(false);
  }

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;
