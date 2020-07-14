import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Home} />
          <Route path = "/posts" component = {Posts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
