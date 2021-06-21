import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext'
import { Link, Route } from "wouter"

export default function App () {
    return (
        <StaticContext.Provider value={{name: 'Jorge', suscribete: true}}>
            <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={() => <h1>404 Error 🤭 </h1>}
              path="/404"
            />
          </GifsContextProvider>
        </section>
      </div>
        </StaticContext.Provider> 
    );
}