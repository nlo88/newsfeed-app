import React from 'react';


const UserLogin = (props) => {

   return ( 
      <div>   
                
      <nav className="personalize__navbar">
      <p>
        
      Thank you , {props.name}
      We will get back to you momentarily.

      Sincerely,
      Newsline Crew 
      
      </p>
      </nav>

</div>
    );
}

export default UserLogin;