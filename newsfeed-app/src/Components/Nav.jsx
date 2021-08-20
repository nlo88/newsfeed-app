import React from 'react';
import { Link } from 'react-router-dom';

function Home (props) {
    return (
        <div>
                <nav className="navbar">
                <a href="/home">HOME</a>
                <a href="/login">LOGIN</a>
                </nav>
        </div>
        
    );
}

export default Home;