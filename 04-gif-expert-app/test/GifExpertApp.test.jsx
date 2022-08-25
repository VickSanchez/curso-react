import { render, screen, waitFor, renderHook } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 

    test('Debe hacer match con el Snapshot', () => {

        const { container } = render(<GifExpertApp/>);
        expect( container ).toMatchSnapshot();
        
     });


 });