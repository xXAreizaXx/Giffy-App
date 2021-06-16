import React , {Suspense} from 'react'
import useNearScream from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
    const {isNearScreen , fromRef}= useNearScream({distance: '200px'})

    return (
        <div ref={fromRef}>
            <Suspense fallback={null}>
                {isNearScreen ? <TrendingSearches/> : null}
            </Suspense>
        </div>
    )
}