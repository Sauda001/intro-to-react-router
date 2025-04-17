import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    
    const {name, website} = user;
    return (
        <div>
            <h4>User details here</h4>
            <h3>{name}</h3>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;