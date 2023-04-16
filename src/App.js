import React, { useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App =()=> {

  const[progress,setProgress] = useState(0);
  
  const apikey = process.env.REACT_APP_NEWS_API;
  const pageSize = 6;


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey = {apikey} key = "general" pageSize={pageSize} country = "in" category = "general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey = {apikey} key = "business" pageSize={pageSize} country = "in" category = "business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey = {apikey} key = "entertainment" pageSize={pageSize} country = "in" category = "entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey = {apikey} key = "general" pageSize={pageSize} country = "in" category = "general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey = {apikey} key = "health" pageSize={pageSize} country = "in" category = "health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey = {apikey} key = "science" pageSize={pageSize} country = "in" category = "science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey = {apikey} key = "sports" pageSize={pageSize} country = "in" category = "sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey = {apikey} key = "tehnology" pageSize={pageSize} country = "in" category = "technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }

  export default App;

