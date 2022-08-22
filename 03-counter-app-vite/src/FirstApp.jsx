const newMessage = {
    message: "Hola Mundo",
    title: "Fernando",
}
const message = "Hola soy una variable"

export const FirstApp = () => {
    return (
        <>
        <h1>Vick Sanchez</h1>
        <p>Soy un subtitulo</p>
        <p>{ message }</p>
        <code>{JSON.stringify( newMessage )}</code>
        </>
    )
};
