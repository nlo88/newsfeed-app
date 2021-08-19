import React, { useState, useEffect} from 'react';
import { Link, Route , Redirect } from 'react-router-dom'


function Articles( {news} ) {

    console.log(news)
    // console.log(news[0])


    if(!news.length) {
        return <h2>No Articles Found!</h2>
    }

    
    else {

        return (
        
            
        <div>         
        {news.map((news) => (
           
           <div className="top__headlines__container">
            <Link to={`/top-headlines?${news.source}`} key={news.id}>
                <div className="title">{news.title}</div>
                <img src={news.urlToImage} alt={news.name} width ="50%"/>
                <div className="publishedAt">{news.publishedAt}</div>
            <Route path="/" render ={() => <Redirect to={news.url}/>}/>
            </Link>
            <div className="description">{news.description}</div>
            <div className="content">{news.content}</div>
            </div>
            
            // <p>{news.title}{news.content}{news.url}</p>
  
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