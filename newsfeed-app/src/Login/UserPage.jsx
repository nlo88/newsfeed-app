import React from 'react';


const UserLogin = (props) => {

   return ( 
      <div>   
                
      <nav className="userform">
      
      <h4>Hello,{props.name}</h4>
      
      <div>Thank you for reaching out. </div>
      Your feedback is very important to us. 
      Our team will get back to you momentarily.
      
      
      <div>Sincerely,</div>
      <div>Newsline Crew.</div> 
     
      
      </nav>

</div>
    );
}

export default UserLogin;