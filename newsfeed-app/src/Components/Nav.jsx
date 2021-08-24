import React from 'react';
import { Link } from 'react-router-dom';

const Home =({ news })=> {
    
       
    return (
        <div className="showcase">   
                
                <div className="left-side">
                <nav className="navbar">

                <Link to="/business">HOME</Link>
                <Link to="/health">HEALTH</Link>
                <Link to="/entertainment">ENTERTAINMENT</Link>
                <Link to="/sports">SPORTS</Link>
                    
                    <div className="right-side">
                        <Link to="/contactus">CONTACT US</Link> 
                    </div>
                </nav>
                </div>
                
                
        </div>
        
    );
}

export default Home;