import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from './'


export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1> 
      <hr />

      {
            /*
            isLoading 
            ? 
                (
            <div className="alert alert-info text-center">loading...</div>
                ) 
            : 
                (
            <blockquote className="blockquote text-end">
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-2">{author}</footer>
            </blockquote>
                )
            */
                // Este Bolque se sustituye por los componentes LoadingQuote y Quote a continuación:

        isLoading
        ? <LoadingQuote/>
        : <Quote author={ author } quote={ quote }/>
      }

      <button
        className="btn btn-primary"
        onClick={() => decrement()}
        disabled={counter === 1 ? true : false}
      >
        Previous Quote
      </button>
      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Quote
      </button>
      <button
        className="btn btn-primary"
        onClick={() => reset()}
        disabled={isLoading}
      >
        Reset
      </button>
    </>
  );
};
