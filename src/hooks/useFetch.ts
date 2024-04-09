import axios from "axios";
import _ from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
export interface Post {
  id: number;
  title: string;
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const useFetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await axios.get<Post[]>(apiUrl);
      setPosts(response.data);
    } catch (error:any) {
      console.error("Error fetching data:", error);
      setError(error);
    }
    setLoading(false);
  };

  const memoizedFetchData = useMemo(() => {
    if (!requestSent) {
      console.log('pppp',requestSent)
      setRequestSent(true);
      fetchData();
    }
  }, [requestSent]);

  useEffect(() => memoizedFetchData, []);

  const debouncedFetchData = useCallback(_.debounce(fetchData, 500), [
    requestSent,
  ]);

  const handleRefetch = () => {
    debouncedFetchData();
  };

  return { loading, handleRefetch, posts ,error};
};
