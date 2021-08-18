import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Headlines from './Articles/Headlines';
import SearchForms from './Components/SearchForms';
import Nav from './Components/Nav';
import { NewsContextProvider } from './NewsContext';



function App() {
  

  return (
    <div className="App">
      

      <NewsContextProvider>
      
      </NewsContextProvider>
      
      <Headlines />
      
      <Home />
      
      <Router>
      <Nav />
      
      <SearchForms />
    </Router>
      
    </div>
  );
}

export default App;
