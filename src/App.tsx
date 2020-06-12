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
        <nav className='nav__top'>
          <ul>
            <li className='li__view-code'>
              <a href='https://github.com/july2m3/website-examples'>
                View Code
              </a>
            </li>
            <li className='li__picture li__picture-left'>
              <i className='fas fa-desktop nav__selection' />
            </li>
            <li className='li__picture'>
              <i className='fas fa-mobile-alt nav__selection' />
            </li>
            <li className='li__dropdown'>
              <div className='dropdown'>
                <button className='dropbtn'>
                  Web-Site <i className='fas fa-angle-down nav__chevron'></i>
                </button>
                <div className='dropdown-content'>
                  <Link to='/'>
                    <a href='#'>Home</a>
                  </Link>
                  <Link to='/test'>
                    <a href='#'>Test</a>
                  </Link>
                  <Link to='card-layout'>
                    <a href='#'>Card Layout</a>
                  </Link>
                </div>
              </div>
              {/* <button className='button__dropdown'>Website Themes</button>
              <div className='div_dropdown-content'>
                <p>
                  <Link to='/'>Home</Link>
                </p>
                <p>
                  <Link to='/card-layout'>Card Layout</Link>
                </p>
                <p>
                  <Link to='/test'>Test</Link>
                </p>
              </div> */}
            </li>
          </ul>
        </nav>
        <main className='main__content'>
          <Switch>
            <Route path='/card-layout'>
              <CardLayout />
            </Route>
            <Route path='/test'>
              <Test />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </>
    </BrowserRouter>
  );
};

export default App;
