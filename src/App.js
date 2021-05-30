import React , { useState } from 'react'
import ListOfGifs from './components/ListOfGifs'

export default function App () {
    const [keyword, setkeyword] = useState('Panda')
    return (
        <div>
            <h1>App de GIFS</h1>
            <ListOfGifs keyword={keyword}/>
            <button onClick={() => setkeyword('Futbol')}>Cambiar</button>
        </div>        
    );
}