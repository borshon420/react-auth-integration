import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is home</h1>
            <h4>User: {user.displayName}</h4>
        </div>
    );
};

export default Home;