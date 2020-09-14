import React, { useState, useEffect } from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
// import Login from './components/Login'
// import Header from './components/Header'
// import Home from './components/Home';
// import Posts from './components/Posts';
// import Hooks from './components/HooksDemo/Hooks';
import CovidTraker from './components/CovidTracker/CovidTraker';
import Countries from './components/Countries/Countries';
import { fetchData } from './api/covidDetails'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  const handleCountryChange = async (country) => {
    setData(await fetchData(country))
    setCountry(country)
  }
  useEffect(() => {
    const fetchApi = async () => {
      setData(await fetchData())
    }
    debugger
    fetchApi()
  }, [])
  return (
    <div className="App">
      {/* <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Home} />
          <Route path = "/posts" component = {Posts} />
        </Switch>
      </BrowserRouter> 
      <Hooks /> */}
      <Countries handleCountryChange={handleCountryChange} />
      <CovidTraker data={data} />
    </div>
  );
}

export default App;
