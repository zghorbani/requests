import { useFetch } from "../hooks/useFetch";
import { useMyContext } from "../utility/Provider";
import Results from "./Results";

const AComp = () => {
    const { setItems} = useMyContext();
    const { IsLoading, posts, IsError } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const handleRefetch = () => {
        setItems((prevState:any) => ({ ...prevState, isForce: true }));
    };
    console.log('aaaa')

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
