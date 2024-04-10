import { useQuery } from "../hooks/useFetch";
import Results from "./Results";

const AComp = () => {
    const { IsLoading, posts, IsError, refetch } = useQuery('https://jsonplaceholder.typicode.com/posts')
    const handleRefetch = () => {
        refetch()
    };

    return (
        <div className="w-1/2">
            <button
                onClick={handleRefetch}
                className=" mb-2 h-10 border border-gray-500 p-2 rounded-md bg-gray-200"
            >
                Refetch Data
            </button>
            <Results loading={IsLoading} posts={posts} error={IsError} />
        </div>
    );
};

export default AComp;
