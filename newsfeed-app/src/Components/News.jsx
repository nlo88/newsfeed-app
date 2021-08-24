import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function News (props) {
    
    const [news, setNews] = useState([])
   
      useEffect(()=> {
        const getNews = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
            
            if (props.match) {
                url += `&category=${props.match.params.category}`
            } 
            
            fetch(url)
            .then(res => res.json())
            .then(res => { 
              setNews(res.articles)
            })
            .catch(err => console.log(err))
          }
          getNews()
      },[props])
      
      
    return (
        <div>      
        
        {news.map((article, index) => 
        
        (
           <div className="top__headlines__container" key={index}>
            
           <div className="author">{article.author}</div>
           <div className="title">{article.title}</div>
           
           <Link to={`/top-headlines/${article.title}`} news={article} key={article.title}>
               <img src={article.urlToImage} alt={article.title} width ="50%"/>
                </Link>
            
           <div className="content">{article.content}</div>
           <div className="publishedAt">{article.publishedAt}</div> 
            
           <a href={article.url} target="_blank" className="readMore" rel="noreferrer">Read more...</a>
           </div>
        ))}
        </div>
    );
}

export default News;