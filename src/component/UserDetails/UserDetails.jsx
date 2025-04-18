import React, {  } from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);

    const params = useParams()
    console.log(params.id)
    
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