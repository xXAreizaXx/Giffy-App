import React from 'react';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import {useGif} from 'hooks/useGifs';

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading , gifs , setPage} = useGif({keyword})

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
        {loading 
            ? <p>Cargando...✅</p> 
            : <div>
                <h3>{decodeURI(keyword)}</h3>
                <ListOfGifs gifs = {gifs}/>
              </div>
        }
        <br />
        <button onClick={handleNextPage}>Get Next Page</button>
            
        </>
    )
}