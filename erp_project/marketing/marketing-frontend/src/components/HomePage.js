// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to MyApp</h1>
            <p>Discover the best solution for your business needs.</p>
            <button onClick={() => alert('Explore Now!')}>Explore Now</button>
        </div>
    );
};

export default HomePage;
