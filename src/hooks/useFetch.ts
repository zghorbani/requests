import axios from "axios";
import { useEffect, useState } from "react";
import { useMyContext } from "../utility/Provider";
import { Items, Post } from "../utility/type";
export const useFetch = (apiAddress = "") => {
  const { items, setItems } = useMyContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const [IsError, setIsError] = useState<boolean>(false);
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  let isRequestSent = false;

  const fetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiAddress);
      setItems((prevState: Items) => ({
        ...prevState,
        results: [
          ...prevState.results,
          { key: apiAddress, data: response.data },
        ],
      }));
      setPosts(response.data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setIsError(true);
      setIsLoading(false);
    }
    setItems((prevState: Items) => ({ ...prevState, isForce: false }));
  };

  useEffect(() => {
    console.log("isRequestSent", isRequestSent);
    if (
      (items.results.filter((item) => item.key === apiAddress).length === 0 ||
        items.isForce) &&
      !isRequestSent
    ) {
      isRequestSent = true;
      fetch();
    } else {
      setPosts(
        items.results.find((item) => item.key === apiAddress)?.data || []
      );
      setIsLoading(false);
    }
  }, [items.isForce]);

  return { IsLoading, posts, IsError };
};
