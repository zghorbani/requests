import axios from "axios";
import { useEffect, useState } from "react";
import { useMyContext } from "../utility/Provider";
import { Post } from "../utility/type";
export const useFetch = (apiAddress = "") => {
  const { items, setItems } = useMyContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const [IsError, setIsError] = useState<boolean>(false);
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  const fetch = async () => {
    try {
      const response = await axios.get(apiAddress);
      setItems((prevState: any) => ({
        ...prevState,
        results: [
          ...prevState.results,
          { key: apiAddress, data: response.data },
        ],
      }));
      setPosts(response.data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  console.log("usefetch");
  useEffect(() => {
    if (
      items.results.filter((item) => item.key === apiAddress).length === 0 ||
      items.isForce
    ) {
      fetch();
      setItems((prevState: any) => ({ ...prevState, isForce: false }));
    } else if (
      items.results.filter((item) => item.key === apiAddress).length > 0
    ) {
      setPosts(
        items.results.filter((item) => item.key === apiAddress)?.[0]?.data
      );
      setIsLoading(false);
    }
  }, [items.isForce]);

  return { IsLoading, posts, IsError };
};
