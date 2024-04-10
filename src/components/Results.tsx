import { memo } from "react";

const Results = ({ loading, error, posts }: { loading: boolean, error: boolean, posts: any[] }) => {
    
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <p> Have a problem</p>;
    }

    return (
            <ul>
                {posts?.map((post: any) => (
                    <li key={post?.id} className="before:content-['_-']">{post?.title}</li>
                ))}
            </ul>
    );
};

export default memo(Results);