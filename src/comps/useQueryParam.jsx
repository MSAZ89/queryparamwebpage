import { useState, useEffect } from "react";

export default function useQueryParam(paramName, defaultValue) {
  const [paramValue, setParamValue] = useState(defaultValue);

  useEffect(() => {
    // Get the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);

    // Check if the parameter is present
    if (queryParams.has(paramName)) {
      // Set the parameter value to the value in the URL
      setParamValue(queryParams.get(paramName));
    }
  }, [paramName]);

  function setQueryParam(value) {
    // Update the parameter value in the state
    setParamValue(value);

    // Update the parameter value in the URL
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(paramName, value);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${queryParams}`
    );
  }

  return [paramValue, setQueryParam];
}
