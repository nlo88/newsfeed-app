import React from 'react';
import { Link } from 'react-router-dom';

function Home (props) {
    return (
        <div>   
                
                <nav className="navbar">
                <a href="/">HOME</a>
                <a href="/login">WORLD</a>
                <a href="/login">TECH</a>
                <a href="/login">BUSINESS</a>
                <a href="/login">POLITICS</a>
                <a href="/login">SPORTS</a>
                </nav>
        
        </div>
        
    );
}

export default Home;