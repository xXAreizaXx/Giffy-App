import React , {useEffect , useState} from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({keyword}) {
    const [gifs , setGifs] = useState([]);  

    useEffect(() => {
        getGifs({keyword}).then(gifs => setGifs(gifs));              
    } , [keyword]) 

    return (
        gifs.map(singleGif => {
            return (
                <Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url}/> 
            )                                                          
        })
    )
}