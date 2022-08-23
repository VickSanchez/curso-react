import PropTypes from "prop-types";

const newMessage = {
    message: "Hola Mundo",
    title: "Fernando",
}
const message = "Hola soy una variable"
const getMessage = () => "Vick";

export const FirstApp = ( {title, subTitle, name} ) => {

    return (
        <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
        </>
    )
};

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    name: "Victor",
    title: "Hola RTP",
    subTitle: 123
}