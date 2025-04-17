import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h4>{posts.title}</h4>
            <p>{posts.body}</p>
        </div>
    );
};

export default PostDetail;