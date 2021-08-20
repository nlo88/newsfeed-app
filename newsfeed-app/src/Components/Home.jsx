import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {

    const date =new Date().toLocaleString()
  
    return (
        <div className="header">
            
            <div className="top__logo" ><h2>= NEWSLINE =</h2></div>
            <div className="current__time"><p>{date}</p></div>
        
        </div>
    );
}

export default Home;