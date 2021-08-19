import React, { useState, useEffect }from 'react';



function Article({ news }) {

    console.log(news)
    
    return (
        <div className="details-container">
        <h3>ARTICLE: {news}</h3>
        <div className="news">
        
        <h1 className="news__title">{news.title}</h1>
        <p className="news__desc">{news.description}</p>
        
        <span className="news__author">{news.author}</span> <br />
        <span className="news__published">{news.publishedAt}</span>
        <span className="news__source">{news.source.name}</span>
        </div>
        
        </div>
    );
}

export default Article;