import React, { use } from 'react';

const Users2 = ({reactPromise}) => {

    const promiseData = use(reactPromise);
    console.log('user 2 ',promiseData);

    return (
        <div>
            <h2>This is users 2</h2>
        </div>
    );
};

export default Users2;