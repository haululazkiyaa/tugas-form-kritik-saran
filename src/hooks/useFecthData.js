import { useCallback, useEffect, useState } from "react";

import axios from "axios";

const useFecthData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [disableLoadMore, setDisableLoadMore] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`)
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data]);
        if (response.data.length === 0) {
          setDisableLoadMore(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { data, loading, disableLoadMore, handleLoadMore };
};

export default useFecthData;
