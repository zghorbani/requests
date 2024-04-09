import { Post, useFetch } from "../hooks/useFetch";



const Results = () => {
    const { loading, handleRefetch, posts, error } = useFetch()

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container my-2">
            <p className="my-3">Posts</p>
            <button onClick={handleRefetch} className="border border-gray-500 p-2 rounded-md bg-gray-200">Refetch Data</button>
            <p className="text-red-500">{error}</p>
            <ul>
                {posts?.map((post: Post) => (
                    <li key={post?.id} className="before:content-['_-']">{post?.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
