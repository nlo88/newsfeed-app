import React from 'react';
import { Link, Route , Redirect } from 'react-router-dom'


function Articles( { news } ) {

    console.log(news)
    
    if(!news.length) {
        return <h2 style={{fontStyle:"italic"}}>...Loading</h2>
    }
    else {
        return (
        <div>         
        {news.map((news) => 
                
        (
           <div className="top__headlines__container">
            
            <div className="content">{news.author}</div>
            <div className="title">{news.title}</div>
           
            <Link to={`/articles/${news.title}`} news={news} key={news.title}>
                <img src={news.urlToImage} alt={news.title} width ="50%"/>
                
            <Route path="/articles/:title" render={()=> <Redirect to={news.title} news={news}/>}/>
            </Link>
            
            <div className="description">{news.description}</div>
            <div className="content">{news.content}</div>
            
            <div className="publishedAt">{news.publishedAt}</div> 
            
            <a href={news.url} target="_blank" className="readMore">Read more...</a>
            
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