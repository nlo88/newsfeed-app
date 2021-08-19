import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';



function Article({ news }) {
    
    return (
        <div className="detail-container">
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