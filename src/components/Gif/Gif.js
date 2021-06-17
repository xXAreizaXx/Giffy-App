import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif ({ title, id, url }) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className='gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}

export default React.memo(Gif)