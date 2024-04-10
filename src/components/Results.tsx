import { memo } from "react";
import { Post } from "../utility/type";

const Results = ({ loading, error, posts }: { loading: boolean, error: boolean, posts: Post[] }) => {

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <p> Have a problem</p>;
    }

    return (
        <ul>
            {posts?.map((post: Post) => (
                <li key={post?.id} className="before:content-['_-']">{post?.title}</li>
            ))}
        </ul>
    );
};

export default memo(Results);