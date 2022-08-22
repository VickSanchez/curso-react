
// FETCH API

const apiKey = "2yDzo96w36RzoGMFNCCLEQDn5xCl9p8t";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json())// resulta una nueva promesa y pasa al siguiente then()
    .then( ({data}) => { 
        const {url} = data.images.original; 
        
        const img = document.createElement('img');

        img.src = url;

        document.body.append( img );

    })

    .catch ( console.warn )