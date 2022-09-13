import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const INVALID_ADDRESS_TEXT = "owner should be a valid address or ENS name";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.status != 200)
          throw Error("could not fetch data from resource");
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
        if (INVALID_ADDRESS_TEXT === err.response.data)
          setError("Please connect your wallet");
        else setError(err.response.data);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
