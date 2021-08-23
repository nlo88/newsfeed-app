import React from 'react';
import { useState } from 'react';
import UserPage from './UserPage';

const Login = () => {

   
    const [fullname, setFullname]= useState('')
    const [message, setMessage]= useState('')
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
        <div className="contactus__container">
            
            <h5>Please enter your username and password:</h5>
            
            <form onSubmit={handleSubmit}>
                
            <label for="fullname">Full name:</label>
                <input  className="fullname"
                        type="text"
                        required
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                />
                
                <label for="message">Message</label>
                <textarea   className="message"
                            type="text"
                            required
                            value={message}
                            cols="30" rows="10"
                            onChange={e => setMessage(e.target.value)}
                />

                <button className="submit" onClick={handleSubmit} >Submit</button>
            </form>


        </div>
    );
}

export default Login;