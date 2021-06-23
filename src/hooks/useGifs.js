import { useState, useEffect, useContext } from 'react';
import GifsContext from 'context/GifsContext';
import getGifs from 'services/getGifs';

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setloadingNextPage] = useState(false)
    const [Page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse , rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            });
    }, [keyword, keywordToUse, setGifs , rating])

    useEffect(() => {
        if (Page === INITIAL_PAGE) return
        setloadingNextPage(true)
        getGifs({ keyword: keywordToUse, page: Page , rating})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setloadingNextPage(false)
            })
    }, [keywordToUse, Page, setGifs , rating])

    return { loading, loadingNextPage, gifs, setPage }
}