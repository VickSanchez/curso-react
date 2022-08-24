import { getByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp/>', () => { 

    test('Debe de hacer match con snapshot', () => {


        });

    test('Debe mostrar el titulo en un h1', () => {
         
        const title = "Hola RTP";    
        const { container, getByText } = render( <FirstApp title={ title } />)   
        
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain( title )

         });
    





});