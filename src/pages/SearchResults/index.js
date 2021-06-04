import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import {useGif} from '../../hooks/useGifs';

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading , gifs} = useGif({keyword})

    return (
        <>
        {loading ? <p>Cargando...✅</p> : <ListOfGifs gifs = {gifs}/>}  
            
        </>
    )
}