import React from 'react';
import { useState } from 'react';
import UserPage from './UserPage';

const Login = () => {

    const [username, setUsername]= useState('')
    const [fullname, setFullname]= useState('')
    const [password, setPassword]= useState('')

    const [submit, setSubmit]= useState (false)

    const handleSubmit = (e) => {
       e.preventDefault();
        setSubmit(true)
    }

    if (submit === true)
    
    return (
        <UserPage name={fullname}/>
    )
    
    return (
        <div className="contact__container">
            
            <h5>Please enter your username and password:</h5>
            
            <form onSubmit={handleSubmit}>
                
            <label for="username">Full name:</label>
                <input  className="fullname"
                        type="text"
                        required
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                />
                

                <label for="username">User name:</label>
                <input  className="username"
                        type="text"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                />
                
                
                <label for="password">Password:</label>
                <input  className="pass"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                />
                
                
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </form>


        </div>
    );
}

export default Login;