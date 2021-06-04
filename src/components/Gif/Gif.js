import React from 'react'

export default function Gif ({title , id , url})  {
    return (
        <div>
            <a href={`${id}`}>
             <h4>{title}</h4>
             <img loading='lazy' alt={title} src={url}/>
            </a>
        </div> 
    );
}
 
