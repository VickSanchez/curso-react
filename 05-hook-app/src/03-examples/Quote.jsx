import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

   
export const Quote = ({author, quote}) => {

  const pRef = useRef();

  const [boxSize, setboxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    // console.log( pRef.current.getBoundingClientRect());
    const { height, width } = pRef.current.getBoundingClientRect();
    setboxSize({ height, width})
  
  }, [quote]);

  return (
    <>
        <blockquote className="blockquote text-end" style={{ dislplay: 'flex'}}>
          <p ref={ pRef }className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
   </>
  );
  
};
