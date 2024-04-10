import axios from "axios";
import { useEffect, useState } from "react";
import { useMyContext } from "../utility/Provider";
import { Post } from "../utility/type";
export const useFetch = (apiAddress = "") => {
  const {items, setItems} = useMyContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const fetch = async () => {
    try {
      const response = await axios.get(apiAddress);
      setItems((prevState:any) => ({ ...prevState, results: [...prevState.results, {key:apiAddress,data:response.data}] }));
      setPosts(response.data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError(error);
    }
    setLoading(false);
  };

           
  useEffect(() => {
    if (items.results.filter((item) => item.key === apiAddress).length === 0 || items.isForce) {
      fetch();
      setItems((prevState:any) => ({ ...prevState, isForce: false }));
    } else if(items.results.filter((item) => item.key === apiAddress).length > 0){
      setPosts(
        items.results.filter((item) => item.key === apiAddress)?.[0]?.data
      );
      setLoading(false)
    }
  }, [items.isForce]);

  return { loading, posts, error };
};
