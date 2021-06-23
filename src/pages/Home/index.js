import React from "react"
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from "components/SearchForm/index"
import { Helmet } from "react-helmet"

export default function Home() {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm/>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}
