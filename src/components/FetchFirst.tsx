import { useQuery } from "../hooks/useFetch";
import Results from "./Results";

const FetchFirst = () => {
    const ApiAddress = process.env.REACT_APP_API_ADDRESS || ''
    const { isLoading, posts, isError, refetch } = useQuery(ApiAddress)
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
            <Results loading={isLoading} posts={posts} error={isError} />
        </div>
    );
};

export default FetchFirst;
