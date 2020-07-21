import React from 'react';
import {
  BrowserRouter, 
  Route,
  Switch,
  } from 'react-router-dom';

//Local imports
import '../index.css'; 
import NotFound from './NotFound';
import Home from './Home';

//Page routes
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render= {()=> <Home />} />
          <Route path = '/search=:searchInput' render= {({match}) => <Home search= {match.params.searchInput} />}/>
          <Route render= {() => <NotFound color= 'white'/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
