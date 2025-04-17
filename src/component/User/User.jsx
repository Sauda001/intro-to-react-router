import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid green',
        padding: '10px',
        margin: '20px'
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <small>Phone: {phone}</small><br />
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;