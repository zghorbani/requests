import { useQuery } from "../hooks/useFetch";
import Results from "./Results";

const CComp = () => {
    const { IsLoading, posts, IsError } = useQuery('https://jsonplaceholder.typicode.com/posts')

    return (
        <Results loading={IsLoading} posts={posts} error={IsError} />
    );
};

export default CComp;
