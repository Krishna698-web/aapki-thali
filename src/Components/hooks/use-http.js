const useHttp = () => {
  async function sendRequest(requestConfig) {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      const data = await response.json();
      //   console.log(data);
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  return {
    sendRequest,
  };
};

export default useHttp;
