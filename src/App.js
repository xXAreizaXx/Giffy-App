import React from 'react'
import {Link , Route} from 'wouter'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

export default function App () {
    return (
        <StaticContext.Provider value={{name: 'Jorge', suscribete: true}}
        >
            <div>
                <section>
                    <Link to='/'><img src='Giffy.ico' alt=""/></Link>
                    <GifsContextProvider>
                        <Route component={Home} path='/'/>
                        <Route component={SearchResults} path='/search/:keyword'/>
                        <Route component={Detail} path='/search/:id'/>
                    </GifsContextProvider>
                </section>
            </div>   
        </StaticContext.Provider> 
    );
}