import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../styles/App.css';
import Nav from './Nav.jsx'
import Meteo from './Meteo.jsx';
import Home from './Home.jsx'
import Pokemon from './Pokemon.jsx'
import Github from './Github.jsx'
import Minecraft from './Minecraft.jsx'

function App() {
  return (
    <main>
      <Router>
      <Switch>
          <Route path='/' exact />
        </Switch>
    <Nav />
    
    <div className="app-container">
      <div className="app">
      <Route path='/' exact component = {Home} />
      <Route path='/meteo' exact component = {Meteo}/>
      <Route path='/pokemon' exact component = {Pokemon}/>
      <Route path='/github' exact component = {Github}/>
      <Route path='/minecraft' exact component = {Minecraft}/>
      </div>
    </div>
    </Router>
    </main>
  );
}

export default App;