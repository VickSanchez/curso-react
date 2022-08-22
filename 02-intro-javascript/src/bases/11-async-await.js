// async y await

const getImagen = async() => {
try {
    const apiKey = "2yDzo96w36RzoGMFNCCLEQDn5xCl9p8t";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = await data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
} catch (error) {
    //  Manejo de errores
    console.log(error)
}
   

} 
getImagen();
