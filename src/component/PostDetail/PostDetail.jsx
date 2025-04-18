import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const posts = useLoaderData()
    const navigate = useNavigate()
    return (
        <div>
            <h4>{posts.title}</h4>
            <p>{posts.body}</p>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetail;