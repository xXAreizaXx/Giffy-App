import React, {useEffect, useRef, useCallback} from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from "just-debounce-it"
import {Helmet} from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function SearchResults ({ params }) {
  const { keyword , rating = 'g' } = params
  const { loading, gifs, setPage } = useGifs({ keyword , rating})
  const visorRef = useRef()
  const {isNearScreen} = useNearScreen({ externalRef: !loading && visorRef, once: false })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

  const debounceNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 2000
  ), [])

  useEffect(function () {
    // if (isNearScreen) setPage(prevPage => prevPage + 1)
    if (isNearScreen) debounceNextPage()
  })

  return <>
    {loading
      ? <Spinner />
      : <>
        <Helmet>
          <title>{title} | Giffy</title>
          <meta name="description" content={title}/>
        </Helmet>
        <SearchForm initialKeyword={keyword} initialRating={rating}/>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div data-testid="visor" ref={visorRef} />
      </>
    }
  </>
}