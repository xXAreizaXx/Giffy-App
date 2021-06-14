import React , {Fragment , useState} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches';
import {useGif} from 'hooks/useGifs';

export default function Home () {
    const [keyword, setkeyword] = useState('')
    const [location, setLocation] = useLocation()
    const {loading , gifs} = useGif()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(`/search/${keyword}`)
    }
    const handleChange = (e) => {
        setkeyword(e.target.value)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a GIF..."/>
            </form>
            <h3>Ultima Busqueda</h3>
            <ListOfGifs gifs = {gifs}/>
            <h3>Los GIFS mas populares</h3>
            <TrendingSearches/>
        </Fragment>
    )
}
