import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import Nav from './Components/Nav';
import { API_KEY } from './Config/env';
import Articles from './Articles/Articles';
import UserLogin from './Components/UserLogin';


function App() {
  
  const [news, setNews] = useState({})
  const [searchNews, setSearchNews] = useState('');

  const getNews = async () => {

    const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`

    fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res.articles)
      setNews(res.articles)
      console.log(news)
      
    })
    .catch(err => console.log(err))
  }


  useEffect(() => getNews(), [])

    function handleChange(event){
      setSearchNews(event.target.value);
    }

    function handleSubmit(event){
      event.preventDevault();
      getNews(searchNews);
    }

 
  return (
    <div className="App">
    
    <UserLogin />
    <Home />
    <Nav />
    
    <SearchResults 
    handleSubmit={handleSubmit}
    searchNews={searchNews}/>
    
    <Articles />
    <Router>
    </Router>
     
    </div>
  );
}

export default App;
