import React , {useEffect , useState} from 'react'
import getGifs from './services/getGifs'
import Gif from './components/Gif'
import './App.css';

export default function App () {
    const [gifs , setGifs] = useState([]);  
    
    useEffect(() => {
        getGifs({keyword: 'programing'}).then(gifs => setGifs(gifs));              
    } , []) 

    return (
        <div>
            <h1>App de GIFS</h1>
            {
                gifs.map(singleGif => {
                    return (
                        <Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url}/> 
                    )                                                          
                })
            }
        </div>
        
    );
}