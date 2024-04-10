import { useQuery } from "../hooks/useFetch";
import Results from "./Results";

const FetchSame = () => {
    const ApiAddress = process.env.REACT_APP_API_ADDRESS || ''
    const { isLoading, posts, isError } = useQuery(ApiAddress)

    return (
        <Results loading={isLoading} posts={posts} error={isError} />
    );
};

export default FetchSame;
