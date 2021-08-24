import React from 'react';

function Home(props) {

    const date =new Date().toLocaleString()
  
    return (
        <div className="header">
            <div className="top__logo" ><h1>- NEWSLINE -</h1></div>
            <div className="current__time"><p>{date}</p></div>
        </div>
    );
}

export default Home;