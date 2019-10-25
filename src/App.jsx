import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/shared/Header.jsx';
import Home from './components/main/Home.jsx';
import Sidebar from './components/shared/Sidebar.jsx';
import NewJoke from './components/main/NewJoke.jsx';
import Categories from './components/main/Categories.jsx';
import CategoryJokes from './components/main/CategoryJokes.jsx';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
          <Header />
          <div className="container">
              <div className="row mt-3">
                <Sidebar />
                <Switch>
                  <Route exact path="/" component={Home} />                  
                  <Route path="/categories" component={Categories} />
                  <Route path="/new-joke" component={NewJoke} />
                  <Route path="/category/:category" component={CategoryJokes} />
                </Switch>
              </div>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
