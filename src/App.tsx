import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home/Home';
import CardLayout from './components/CardLayout';

import './App.css';

const Test = () => <p>this is only a test</p>;

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav className="nav__top">
          <ul>
            <li className="li__view-code">
              <a href="https://github.com/july2m3/website-examples">
                View Code
              </a>
            </li>
            <li className="li__picture li__picture-left">
              <i className="fas fa-desktop nav__selection" />
            </li>
            <li className="li__picture">
              <i className="fas fa-mobile-alt nav__selection" />
            </li>
            <li className="li__dropdown">
              <div className="dropdown">
                <button className="dropbtn">
                  Web-Site <i className="fas fa-angle-down nav__chevron"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="/">
                    <button className="link">Home</button>
                  </Link>
                  <Link to="/test">
                    <button className="link">Test</button>
                  </Link>
                  <Link to="card-layout">
                    <button className="link">Card Layout</button>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <main className="main__content">
          <Switch>
            <Route path="/card-layout">
              <CardLayout />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </>
    </BrowserRouter>
  );
};

export default App;
