import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router';

const Post = ({posts}) => {
    const {id, title} =posts

    const navigate = useNavigate()
    const handleNevigate = () => {
        navigate(`/posts/${id}`);
    }
    
    return (
        <div style={{border: '2px solid green', margin: '10px'}}>
            <p>{id}</p>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNevigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;