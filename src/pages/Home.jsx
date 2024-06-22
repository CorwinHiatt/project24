import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>Welcome to the Home page!</h1>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    );
};

export default Home;
