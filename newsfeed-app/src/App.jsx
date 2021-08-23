import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from "./Components/Home";
import News from './Components/News';
import Contactus from './Login/Contactus';


function App () {
  
   return (
    <Router>
        <div className="App">
        <Home />
        <Nav />
         
          <div className="content">
          <Switch>
          
          <Route path="/contactus">
            <Contactus />
          </Route>

          <Route exact path="/:category" component={News}>
          </Route> 
                    
          <Route exact path="/">
          <News />
          </Route>

          </Switch >
          </div>
         
        </div>
    </Router>
  );
}

export default App;
