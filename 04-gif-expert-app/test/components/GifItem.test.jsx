import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('first', () => { 

    const title = "titulo";
    const url = "www.hola.com";

    test('Debe de hacer match con el Snapshot', () => { 

        const { container } = render( <GifItem title={ title }url={ url }/>)
    
        expect( container ).toMatchSnapshot();
    });

    // test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
    //     render( <GifItem title={ title }url={ url }/>)

    //     const { src, alt } = screen.getByRole( 'img' );
    //     expect( src ).toBe( url );
    //     expect( alt ).toBe( title );
    //  })
 });