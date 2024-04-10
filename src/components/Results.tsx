
const Results = ({ loading, error, posts }: { loading: boolean, error: string, posts: any[] }) => {
    
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <p className="text-red-500">{error}</p>
            <ul>
                {posts?.map((post: any) => (
                    <li key={post?.id} className="before:content-['_-']">{post?.title}</li>
                ))}
            </ul>
        </>
    );
};

export default Results;
