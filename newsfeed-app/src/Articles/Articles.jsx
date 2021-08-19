import React, { useState, useEffect} from 'react';
import Article from './Article';
import { Link } from 'react-router-dom'


function Articles( {news} ) {

    console.log(news)
    console.log(news[0])


    if(!news.length) {
        return <h2>No Articles Found!</h2>
    }

    
    else {

        return (
        
            
        <div>         
        {news.map((news) => (
            <p>{news.url}</p>
  
        ))}

        </div>

// <Route
// path="/contact"
// render={() => <Redirect to="/" />}
// />
    

//     <Route
//             path="/contact"
//             render={() => <Redirect to="/" />}
//           />

//           render ={() => <Article />/>

        )
}
}


export default Articles;