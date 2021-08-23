import React from 'react';
import { Link } from 'react-router-dom';


const Home =({ news })=> {
    
       
    return (
        <div className="showcase">   
                
                <nav className="navbar">

                <Link to="/">HOME</Link>
                <Link to="/business">BUSINESS</Link>
                <Link to="/politics">POLITICS</Link>
                <Link to="/health">HEALTH</Link>
                <Link to="/entertainment">ENTERTAINMENT</Link>
                <Link to="/sports">SPORTS</Link>
  
                </nav>
                <Link to="/contactus">CONTACT US</Link> 
        
        </div>
        
    );
}

export default Home;