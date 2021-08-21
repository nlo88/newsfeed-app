import React, { useState , Route, Redirect } from 'react';
import { Link } from 'react-router-dom'
import Articles from '../Articles/Articles';

function World(props) {

  const [news, setNews] = useState({})
  const [searchNews, setSearchNews] = useState('');
  const getNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=world&apiKey=59d6a6fc34d141a6b6b229e993b06be4`

    fetch(url)
    .then(res => res.json())
    .then(res => { 
      setNews(res.articles)
      console.log(news)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => getNews(),[])
    
    return (
        <div>
          
        </div>
    );
}

export default World;