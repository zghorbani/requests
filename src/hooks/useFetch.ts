import axios from "axios";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useMyContext } from "../utility/Provider";
import { Item, Post } from "../utility/type";
export const useQuery = (apiAddress: string) => {
  const { items, setItems } = useMyContext();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  // const FetchLocal = async (force = false) => {
  //   setIsLoading(true);
  //   const item = localStorage.getItem(apiAddress);
  //   if (item === null || force) {
  //     const response = await axios.get(apiAddress);
  //     setLocal({
  //       key: apiAddress,
  //       value: response.data,
  //       ttl: 1000,
  //     });
  //     setPosts(response.data);
  //     setIsLoading(false);
  //   } else {
  //     setPosts(JSON.parse(item).value);
  //     setIsLoading(false);
  //   }
  // };

  const fetch = useCallback(
    async (force = false) => {
      setIsLoading(true);
      if (_.has(items, apiAddress) && !force) {
        setPosts(_.get(items, apiAddress));
        setIsLoading(false);
      } else {
        try {
          const response = await axios.get(apiAddress);
          setItems((prevState: Item) => ({
            ...prevState,
            [apiAddress]: response.data,
          }));
          setPosts(response.data);
          setIsLoading(false);
        } catch (error: any) {
          console.error("Error fetching data:", error);
          setIsError(true);
          setIsLoading(false);
        }
      }
    },
    [apiAddress]
  );

  useEffect(() => {
    // set & get with context
    fetch();
    // set & get with localstorage
    // FetchLocal();
  }, [apiAddress]);

  const refetch = () => {
    fetch(true);
  };

  return { isLoading, posts, isError, refetch };
};
