import React , {Suspense} from 'react'
import useNearScream from 'hooks/useNearScream'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
    const {isNearScream , fromRef}= useNearScream({distance: '200px'})

    return (
        <div ref={fromRef}>
            <Suspense fallback={null}>
                {isNearScream ? <TrendingSearches/> : null}
            </Suspense>
        </div>
    )
}