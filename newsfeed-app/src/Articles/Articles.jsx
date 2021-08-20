import React, { useState, useEffect} from 'react';
import { Link, Route , Redirect } from 'react-router-dom'
import Article from './Article';

function Articles( { news } ) {

    console.log(news)
    
    if(!news.length) {
        return <h2>No Articles Found!</h2>
    }
    else {
        return (
        <div>         
        {news.map((news) => 
                
        (
           <div className="top__headlines__container">
            <div className="title">{news.title}</div>
           
            <Link to={`/article?${news.name}`} news={news} key={news.name}>
                <img src={news.urlToImage} alt={news.name} width ="50%"/>
                
            <Route path="/article/:name" render={()=> <Redirect to={news.id} news={news}/>}/>
            </Link>
            
            <div className="description">{news.description}</div>
            <div className="content">{news.content}</div>
            
            <a href={news.url} target="_blank" className="readMore">Read more...</a>
            <div className="publishedAt">{news.publishedAt}</div> 
            
            </div>
                     
  
        ))}
        </div>

// <p>{news.title}{news.content}{news.url}</p>
// <Route
// path="/contact"
// render={() => <Redirect to="/" />}
// />
//     <Route
//      path="/contact"
//      render={() => <Redirect to="/" />}
//      />
//      render ={() => <Article />/>

        )
}
}


export default Articles;