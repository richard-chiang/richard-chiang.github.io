import React, { Component } from 'react';
import './App.css';
import Project from './Component/Project';
import WorkExperience from './Component/WorkExperience';
import Richard from './Component/Richard';
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      experiences: [],
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="header">
            <nav>
              <ul>
                <li><NavLink to="/">about</NavLink></li>
                <li><NavLink to="/project">project</NavLink></li>
                <li><NavLink to="/resume">resume</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <Route exact path="/" component = { Richard } />
            <Route path="/project" component = { Project } />
            <Route path="/resume" component = { WorkExperience } />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
