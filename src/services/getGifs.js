const apiKey = 'DdXAVKcLJYWx7rTZoSviLv3KjFkk9L4A';

export default function getGifs({keyword = 'Morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;

    return(
        fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {data} = response
                const gifs = data.map(image => {
                    const {images , title , id} = image
                    const {url} = images.downsized_medium
                    return {title, id , url}
                })
                return gifs;
            })
    ) 
}