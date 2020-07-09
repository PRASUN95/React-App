import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
