import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <nav  className="navbar">
        <div classname="links">
          <Link to="/">HOME   |    </Link>
          <Link to="/login">LOGIN</Link>
        </div>
        </nav>
    );
}

export default Nav;