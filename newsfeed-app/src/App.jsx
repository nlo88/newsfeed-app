import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
// import { API_KEY } from './Config/env';
import Articles from './Articles/Articles';
import UserLogin from './Components/UserLogin';
import Home from './Components/Home';
import Article from './Articles/Article';

function App() {
  
  const [news, setNews] = useState({})
  const [searchNews, setSearchNews] = useState('');

  const getNews = async () => {

    // const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`
    const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=59d6a6fc34d141a6b6b229e993b06be4`

    fetch(url)
    .then(res => res.json())
    .then(res => {
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

  <Router>
    <div className="App">
      <Home />
      <Nav />
    
    
    <div className="content">
    <Switch>
        <Route exact path="/articles">
        <Articles news={news}/>
        
        <Route exact path="/article/:name"
                render ={ routerProps =>
                <Article setNews={setNews}
                match={routerProps.match}
                news={news}/>
                
                }
        /> 
        
        <UserLogin />
        </Route>
    </Switch>
    
    </div>
    
    {/* <Articles
        news={news}
        /> */}
    
    </div>
  </Router>


  
  );
}

export default App;
