import React from 'react';
import { Link } from 'react-router';

const Post = ({posts}) => {
    const {id, title} =posts
    
    return (
        <div style={{border: '2px solid green', margin: '10px'}}>
            <p>{id}</p>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;