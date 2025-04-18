import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const promise = use(userPromise)
    // console.log(promise);
    
    return (
        <div>
            <h6>Name: {promise.name}</h6>
            <p>Phone: {promise.phone}</p>
        </div>
    );
};

export default UserDetails2;