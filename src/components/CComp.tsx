import { useFetch } from "../hooks/useFetch";
import Results from "./Results";

const CComp = () => {
    const { loading, posts, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <Results loading={loading} posts={posts} error={error} />
    );
};

export default CComp;
