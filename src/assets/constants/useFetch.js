import { useState, useEffect, useCallback } from "react";

function useFetch( page, tokens) {
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setList((prev) => [
        ...new Set([...prev, ...tokens.slice((page - 1) * 20, (page * 20 - 1)).map((data) => data)])
      ]);
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery,page]);

  return { list, setList };
}

export default useFetch;