import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // (async () => {
    //   // const a = await axios.get(url);
    //   // console.log({ a });
    //   // console.log({ data });
    // })();

    axios
      .get(url)
      .then((res) => {
        if (res.status != 200)
          throw Error("could not fetch data from resource");
        setData(res.data.ownedNfts);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
        setError(err.response.data);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
